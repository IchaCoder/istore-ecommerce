/** @format */

import React from "react";
import { IoIosArrowBack } from "react-icons/all";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [disabled, setDisabled] = useState(false);
	return (
		<div className="max-w-pref bg-white m-auto filter rounded-lg md:w-1/2 lg:w-lg mt-10">
			<header className="flex md:block gap-4 p-4">
				<button className="rounded-lg md:hidden grid hover:shadow-inner2 transition-all duration-500 w-8 h-8 bg-primary place-items-center">
					<IoIosArrowBack className="text-white" />
				</button>
				<h2 className="font-bold text-2xl text-center">Login</h2>
			</header>
			<form className="p-4 mt-10 max-w-pref m-auto">
				<input
					type="email"
					name="email"
					placeholder="Enter Email"
					className="form-input w-pref h-8 my-4 mx-auto flex justify-center focus:bg-inputBg"
				/>
				<input
					type="password"
					name="password"
					placeholder="Enter Password"
					className="form-input w-pref flex justify-center h-8 my-4 mx-auto focus:bg-inputBg"
				/>
				<button
					className={`log p-2 my-10 w-pref flex justify-center gap-3 mx-auto uppercase  rounded-lg bg-primary  text-white hover:shadow-inner2 transition-all duration-500 disabled:cursor-not-allowed disabled:bg-gray-400`}
					// disabled={disabled}
				>
					Log in
				</button>
			</form>
			<h4 className="text-center -mt-6">
				Don't have an account?{" "}
				<Link to="" className="text-primary">
					Create account
				</Link>{" "}
			</h4>
			<Link to="" className="text-primary grid justify-items-center mt-2 pb-10">
				Forgot Password?
			</Link>
		</div>
	);
};

export default Login;
