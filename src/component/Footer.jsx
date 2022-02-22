/** @format */

import React from "react";
import { BsFacebook, BsWhatsapp, BsTwitter } from "react-icons/all";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-white  p-4">
			<ul className=" md:flex">
				<li className=" flex-1 grid place-items-center hover:text-primary p-2 transition-all duration-200">
					<Link to="/">Home</Link>
				</li>
				<li className="flex-1 grid place-items-center hover:text-primary p-2 transition-all duration-200">
					<Link to="/policy">Policy</Link>
				</li>
				<li className="flex-1 grid place-items-center hover:text-primary p-2 transition-all duration-200">
					<Link to="/about">About</Link>
				</li>
			</ul>
			<div className="grid grid-flow-col place-items-center mt-6 p-4">
				<button>
					<BsFacebook className="w-12 h-12 transform hover:scale-110 transition-all duration-200" />
				</button>
				<button>
					<BsWhatsapp className="w-12 h-12 transform hover:scale-110 transition-all duration-200" />
				</button>
				<button>
					<BsTwitter className="w-12 h-12 gap-4 transform hover:scale-110 transition-all duration-200" />
				</button>
			</div>
			<div>Copyright {new Date().getFullYear()}</div>
		</footer>
	);
};

export default Footer;
