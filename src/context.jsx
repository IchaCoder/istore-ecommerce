/** @format */

import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [pending, setPending] = useState(true);
	const [currentUser, setCurrentUser] = useState(null);
	const auth = getAuth(app);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
				// console.log("user active");
			}
			// console.log("user not active");
			setPending(false);
		});
	}, [currentUser]);

	if (pending) {
		return (
			<div style={{ fontSize: "3rem", textAlign: "center" }}>Please wait </div>
		);
	}
	return (
		<AppContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
