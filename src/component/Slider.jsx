/** @format */

import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

const Slider = () => {
	const product = useSelector((state) => state.showProducts.products);
	return (
		<>
			<div
				style={{ padding: "3rem", textAlign: "center", fontWeight: "bold" }}
				className="text-white text-3xl font-bold"
			>
				New Arrivals /
			</div>
			<div>
				<Carousel enableAutoPlay autoPlaySpeed={5000} breakPoints={breakPoints}>
					{product &&
						product.slice(10, product.length).map((item) => {
							const { id, title, rating, price, image } = item;
							return (
								<Item key={id}>
									<Link to={"/product/" + id}>
										<div className="grid place-items-center">
											<img
												src={image}
												alt="laptop"
												style={{ height: "240px", objectFit: "cover" }}
											/>
										</div>
										<div>
											<div className="flex-1 p-3 pl-1 font-bold text-lg text-primary">
												{title}
											</div>
											<h2 className="p-3 flex-1 font-extrabold text-lg mr-10">
												${price}
											</h2>
										</div>
										<div
											className="mx-4 text-xxs"
											style={{ marginLeft: ".75rem", paddingBottom: "1rem" }}
										>
											Rating:{" "}
											<span className="font-bold" style={{ color: "#127475" }}>
												{rating.rate}
											</span>
										</div>
									</Link>
								</Item>
							);
						})}
				</Carousel>
			</div>
		</>
	);
};

export default Slider;
