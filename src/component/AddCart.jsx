/** @format */

import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions";

const Addcart = ({ quantity }) => {
	const [disabled, setDisabled] = useState(true);
	const product = useSelector((state) => state.showProducts.singleProduct);
	const dispatch = useDispatch();

	const addCart = () => {
		if (!disabled) {
			dispatch(addItem(product));
		}
	};

	useEffect(() => {
		if (quantity > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [quantity]);

	return (
		<button
			className={`log p-2 my-10 w-pref flex justify-center gap-3 mx-auto uppercase outline rounded-lg hover:bg-primary hover:text-white text-primary transition-all duration-500 disabled:cursor-not-allowed disabled:bg-gray-400`}
			disabled={disabled}
			onClick={addCart}
		>
			<div>
				{" "}
				<AiOutlineShoppingCart className="w-5 h-5" />
			</div>
			<div>Add to cart</div>
		</button>
	);
};

export default Addcart;
