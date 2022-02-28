/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
	showSingleProduct,
	setLoadingFalse,
	setLoadingTrue,
	increaseQuantity,
	decreaseQuantity,
	resetQuantity,
} from "../../redux/actions";
import Loading from "../Loading";
import Addcart from "../compoent/AddCart";

const Productdetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.showProducts.singleProduct);
	const loading = useSelector((state) => state.showProducts.loading);
	const quantity = useSelector((state) => state.showProducts.quantity);

	const { price, category, image, title, description } = product;

	const fetchSinglePost = async () => {
		try {
			dispatch(setLoadingTrue());
			const response = await axios.get(
				`https://fakestoreapi.com/products/${id}`
			);
			dispatch(showSingleProduct(response.data));
			dispatch(setLoadingFalse());
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchSinglePost();
	}, []);

	useEffect(() => {
		if (quantity < 0) {
			dispatch(resetQuantity());
		}
	}, [quantity]);

	if (loading) {
		return <Loading />;
	}

	return (
		<article className="md:grid grid-cols-2 gap-10 md:mt-8 md:max-w-pref m-auto">
			<div className="md:grid justify-items-center">
				<img
					src={image}
					alt="product"
					className="rounded object-contain md:h-hh"
				/>
			</div>
			<div className="bg-white rounded">
				<div className="p-6 uppercase text-xxs font-bold text-primary">
					{category}
				</div>
				<h1 className="ml-6 mb-4 capitalize font-bold text-2xl">{title}</h1>
				<p className="ml-6">{description}</p>
				<h2 className="m-6 font-bold text-2xl">${price}</h2>
				<div className="max-w-pref m-auto flex font-bold p-4 bg-gray-300 rounded shadow-lg">
					<div
						onClick={() => dispatch(decreaseQuantity())}
						className="flex-1 grid place-items-center text-primary cursor-pointer"
					>
						<AiOutlineMinus />
					</div>
					<div className="flex-1 grid place-items-center">{quantity}</div>
					<div
						onClick={() => dispatch(increaseQuantity())}
						className="flex-1 grid place-items-center text-primary cursor-pointer"
					>
						<AiOutlinePlus />
					</div>
				</div>
				<Addcart quantity={quantity} />
				<div className="pb-10"></div>
			</div>
		</article>
	);
};

export default Productdetail;
