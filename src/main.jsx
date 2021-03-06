/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppProvider } from "./context";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppProvider>
				<App />
			</AppProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
