/** @format */

import { useEffect } from "react";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Error from "./pages/Error";
import Productdetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import { userAuthenticated, userNotAuthenticated } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
	const auth = getAuth(app);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch(userAuthenticated(user));
			} else {
				dispatch(userNotAuthenticated(user));
			}
		});
	}, []);
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
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="cart" element={<Cart />} />
					</Routes>
				</div>
				<Footer />
			</>
		</Router>
	);
}

export default App;
