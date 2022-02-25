/** @format */

import React, { useEffect, useState } from "react";
import Overlay from "./Overlay";
import { showModal } from "../redux/actions";
import { useDispatch } from "react-redux";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/all";

const Nav = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const dispatch = useDispatch();

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
			<div className="flex gap-4">
				<div className="cursor-pointer relative mt-2">
					<div className="absolute h-3 w-3 grid place-items-center -top-1 rounded-md text-xs bg-blue-700 -right-1">
						1
					</div>
					<AiOutlineShoppingCart className="w-5 h-5" />
				</div>
				<button
					className={`${
						scrollPosition > 150
							? `hover:bg-primary hover:text-white sticky top-0 left-0`
							: ""
					} px-4 uppercase outline rounded-lg hover:bg-white hover:text-primary transition-all duration-500`}
				>
					log in
				</button>
			</div>
			<Overlay />
		</nav>
	);
};

export default Nav;
