/** @format */

import React, { useEffect, useState, useContext } from "react";
import Overlay from "./Overlay";
import { showModal } from "../redux/actions";
import { useDispatch } from "react-redux";
import { CgMenuGridR } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/all";
import { useSelector } from "react-redux";
import Login from "./Login";
import { AppContext } from "../context";

const Nav = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.showProducts.cart);
	const navigate = useNavigate();
	const { currentUser } = useContext(AppContext);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={` ${
				scrollPosition > 150
					? `bg-white text-primary sticky top-0 left-0 z-10`
					: "text-white"
			} flex p-6  transform transition-all duration-500 shadow-2xl`}
		>
			<button
				className="text-xl md:hidden"
				onClick={() => dispatch(showModal())}
			>
				<CgMenuGridR className="h-6 w-6" />
			</button>
			<h1 className="flex-1 ml-8 md:ml-0 text-3xl font-bold">
				<Link to="/">iStore</Link>
			</h1>
			<div className="list hidden md:grid flex-1 mr-12">
				<ul className=" md:flex">
					<Link
						to="/"
						className="flex-1 grid place-items-center transform hover:scale-150 transition-all duration-500"
					>
						Home
					</Link>
					<Link
						to="/policy"
						className="flex-1 grid place-items-center transform hover:scale-150 transition-all duration-500"
					>
						Policy
					</Link>
					<Link
						to="/about"
						className="flex-1 grid place-items-center transform hover:scale-150 transition-all duration-500"
					>
						About
					</Link>
				</ul>
			</div>
			<div className="flex gap-8">
				<div
					className="cursor-pointer relative mt-2"
					onClick={() => navigate("/cart")}
				>
					<div
						className={`${
							scrollPosition > 150 && "text-white bg-primary"
						} absolute h-4 w-3 grid place-items-center text-primary bg-white -top-1 rounded text-xs bg- -right-1`}
					>
						{cart.length}
					</div>
					<AiOutlineShoppingCart className="w-5 h-5" />
				</div>

				{currentUser ? (
					<button
						onClick={() => navigate("/profile")}
						className={`${
							scrollPosition > 150
								? `hover:bg-primary hover:text-white sticky top-0 left-0`
								: ""
						} px-4 uppercase outline rounded-lg hover:bg-white hover:text-primary transition-all duration-500`}
					>
						profile
					</button>
				) : (
					<Login scrollPosition={scrollPosition} />
				)}
			</div>
			<Overlay />
		</nav>
	);
};

export default Nav;
