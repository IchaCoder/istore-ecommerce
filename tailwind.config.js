/** @format */

module.exports = {
	content: [
		"./src/component/ProductsGrid.jsx",
		"./src/component/Nav.jsx",
		"./src/component/Overlay.jsx",
		"./src/component/Footer.jsx",
		"./src/pages/About.jsx",
		"./src/pages/Policy.jsx",
		"./src/pages/ProductDetail.jsx",
		"./src/component/Loadig.jsx",
		".src/component/Slider.jsx",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1C538E",
			},
			maxWidth: {
				pref: "90%",
			},
			width: {
				sm: "70%",
				pref: "90%",
			},
			aspectRatio: {
				new: 1 / 2,
			},
			gridTemplateColumns: {
				13: "repeat(auto-fit, minmax(300px,1fr))",
			},
			fontSize: {
				xxs: ["14px", { lineHeight: "1rem", letterSpacing: 1 }],
			},
			height: {
				hh: "500px",
			},
		},
	},
	plugins: [],
};
