/** @format */

import React, { useEffect, useState } from "react";
import img from "../house.jpg";
import { RiDeleteBack2Line } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../redux/actions";

const Cart = () => {
	const [quantity, setQuantity] = useState(1);
	const [newId, setNewId] = useState("");
	const cartItems = useSelector((state) => state.showProducts.cart);
	const state = useSelector((state) => state.showProducts.quantity);
	const product = useSelector((state) => state.showProducts.singleProduct);

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteItem(id));
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = (id) => {
		setQuantity(quantity - 1);
		setNewId(id);
	};

	useEffect(() => {
		if (quantity < 1) {
			dispatch(deleteItem(newId));
		}
	}, [quantity]);

	useEffect(() => {
		setQuantity(state);
	}, []);

	if (cartItems.length < 1) {
		return (
			<div className="flex bg-white p-4 rounded text-center md:w-1/2 m-auto shadow-lg mt-4 gap-2">
				<span className="text-4xl font-bold p-4">Cart is empty</span>
				<Link
					to="/"
					className="capitalize px-2 h-12 mt-4 grid place-items-center rounded bg-primary text-white"
				>
					go home
				</Link>
			</div>
		);
	}

	return (
		<div className="w-full mt-4 md:w-sm m-auto">
			{cartItems &&
				cartItems.map((item) => {
					const { id, title, image, price } = item;

					return (
						<figure
							key={id}
							className="flex bg-white p-4 rounded shadow-lg mt-4 gap-2"
						>
							<div className="flex-1 justify-center flex">
								<img src={image} alt="house" className="md:h-60" />
							</div>
							<figcaption className="flex-1 ">
								<h2 className="font-bold p-2 text-lg md:text-3xl">{title}</h2>
								<h3 className="font-bold pb-1 pl-2 md:text-xl">
									{quantity} X ${price} = ${quantity * price}
								</h3>
								<div className="flex p-1 gap-x-4 md: mt-6">
									<button
										onClick={() => decreaseQuantity(id)}
										className="hover:bg-primary  hover:text-white  transition-all duration-500"
									>
										<AiOutlineMinus className="md:w-6 md:h-6" />{" "}
									</button>
									<button
										onClick={increaseQuantity}
										className="hover:bg-primary hover:text-white  transition-all duration-500"
									>
										<AiOutlinePlus className="md:w-6 md:h-6" />{" "}
									</button>
								</div>
							</figcaption>
							<button className="" onClick={() => handleDelete(id)}>
								<RiDeleteBack2Line className="md:w-10 md:h-10" />
							</button>
						</figure>
					);
				})}
		</div>
	);
};

export default Cart;
