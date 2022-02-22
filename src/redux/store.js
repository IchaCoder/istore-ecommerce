/** @format */
import { combineReducers, createStore } from "redux";

const initialState = {
	products: [],
	singleProduct: {},
	loading: false,
};

const showProductsReducer = (state = initialState, { type, payload }) => {
	if (type === "SHOW_PRODUCTS") {
		return { ...state, products: payload };
	}

	if (type === "SHOW_SINGLE_PRODUCT") {
		return { ...state, singleProduct: payload };
	}

	if (type === "SET_LOADING_TRUE") {
		return { ...state, loading: true };
	}

	if (type === "SET_LOADING_FALSE") {
		return { ...state, loading: false };
	}
	return state;
};

const modalBool = {
	showModal: true,
};

const modalReducer = (state = modalBool, { type, payload }) => {
	if (type === "SHOW_MODAL") {
		return { ...state, showModal: false };
	}

	if (type === "HIDE_MODAL") {
		return { ...state, showModal: true };
	}
	return state;
};

const reducers = combineReducers({
	showProducts: showProductsReducer,
	showModal: modalReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
