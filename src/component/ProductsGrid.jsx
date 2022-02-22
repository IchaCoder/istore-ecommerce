/** @format */

import React, { useEffect } from "react";
import {
	showProducts,
	setLoadingFalse,
	setLoadingTrue,
} from "../redux/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Productsgrid = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.showProducts.products);
	const loading = useSelector((state) => state.showProducts.loading);

	const url = "https://fakestoreapi.com/products";
	const fetchProducts = async () => {
		try {
			dispatch(setLoadingTrue());
			const res = await axios.get(url);
			dispatch(showProducts(res.data));
			dispatch(setLoadingFalse());
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<section className="max-w-pref md:w-sm m-auto my-20  grid grid-cols-13 gap-10 justify-self-center">
			{products &&
				products.slice(0, 14).map((product) => {
					const { price, image, category, title, id } = product;
					return (
						<div key={id} className="card bg-white shadow-lg rounded-md ">
							<div className="grid justify-items-center">
								<img
									src={image}
									alt="title"
									className="product"
									loading="lazy"
								/>
							</div>
							<h2 className="p-3 font-bold text-2xl mx-4 text-primary">
								{title}
							</h2>
							<div className="grid grid-cols-2">
								<h2 className="p-3 font-extrabold text-2xl mx-4">${price}</h2>
								<h3 className="p-3 uppercase font-bold grid justify-items-end mx-4">
									{category}
								</h3>
							</div>
							<button className="my-4 uppercase outline rounded bg-primary p-3 text-white hover:outline hover:shadow-2xl hover:bg-white hover:text-primary m-auto grid transition-all duration-500">
								<Link to={`/product/${id}`}>details</Link>
							</button>
						</div>
					);
				})}
		</section>
	);
};

export default Productsgrid;
