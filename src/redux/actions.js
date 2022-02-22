/** @format */

export const showProducts = (products) => {
	return {
		type: "SHOW_PRODUCTS",
		payload: products,
	};
};

export const showSingleProduct = (product) => {
	return {
		type: "SHOW_SINGLE_PRODUCT",
		payload: product,
	};
};

export const setLoadingTrue = () => {
	return {
		type: "SET_LOADING_TRUE",
	};
};

export const setLoadingFalse = () => {
	return {
		type: "SET_LOADING_FALSE",
	};
};

export const showModal = () => {
	return {
		type: "SHOW_MODAL",
	};
};

export const hideModal = () => {
	return {
		type: "HIDE_MODAL",
	};
};
