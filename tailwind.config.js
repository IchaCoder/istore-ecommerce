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
		"./src/pages/Login.jsx",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1C538E",
				inputBg: "#e8f0fe",
			},
			maxWidth: {
				pref: "90%",
			},
			width: {
				sm: "70%",
				pref: "90%",
				lg: "40%",
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
			boxShadow: {
				inner2: " 1px 1px 3px 0px black inset",
			},
		},
	},
	plugins: [],
};
