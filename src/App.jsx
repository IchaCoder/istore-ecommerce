/** @format */

import { useState } from "react";
import Productsgrid from "./component/ProductsGrid";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Error from "./pages/Error";
import Productdetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
// import { Router } from "react-router";

function App() {
	return (
		<Router>
			<>
				<div className="App">
					<Nav />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="policy" element={<Policy />} />
						<Route path="product/:id" element={<Productdetail />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</div>
				<Footer />
			</>
		</Router>
	);
}

export default App;
