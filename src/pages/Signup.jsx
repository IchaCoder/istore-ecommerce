/** @format */

import React from "react";
import { IoIosArrowBack } from "react-icons/all";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	return (
		<div className="max-w-pref bg-white m-auto filter rounded-lg md:w-1/2 lg:w-lg mt-10">
			<header className="flex md:block gap-4 p-4">
				<button
					onClick={() => navigate(-1)}
					className="rounded-lg md:hidden grid hover:shadow-inner2 transition-all duration-500 w-8 h-8 bg-primary place-items-center"
				>
					<IoIosArrowBack className="text-white" />
				</button>
				<h2 className="font-bold text-2xl text-center">Sign up</h2>
			</header>
			<form className="p-4 mt-10 max-w-pref m-auto">
				<input
					type="text"
					name="name"
					placeholder="Enter Full Name"
					className="form-input w-pref h-8 my-4 mx-auto flex justify-center focus:bg-inputBg"
				/>
				<input
					type="email"
					name="email"
					placeholder="example@example.com"
					className="form-input w-pref h-8 my-4 mx-auto flex justify-center focus:bg-inputBg"
				/>
				<input
					type="password"
					name="password"
					placeholder="Pick a strong password"
					className="form-input w-pref flex justify-center h-8 my-4 mx-auto focus:bg-inputBg"
				/>
				<button
					className={`log p-2 my-10 w-pref flex justify-center gap-3 mx-auto uppercase  rounded-lg bg-primary  text-white hover:shadow-inner2 transition-all duration-500 disabled:cursor-not-allowed disabled:bg-gray-400`}
					// disabled={disabled}
				>
					Create account
				</button>
			</form>
			<h4 className="text-center -mt-6 pb-10">
				Already have an account?{" "}
				<Link to="/login" className="text-primary">
					Log in
				</Link>{" "}
			</h4>
		</div>
	);
};

export default Signup;
