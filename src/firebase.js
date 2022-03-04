/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBp_fiKOBBcBS16GnOLqUKXH9Jc5bTlRr8",
	authDomain: "istore-ecommerce.firebaseapp.com",
	projectId: "istore-ecommerce",
	storageBucket: "istore-ecommerce.appspot.com",
	messagingSenderId: "1021432336287",
	appId: "1:1021432336287:web:0478d15ccf44ad027b37aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
