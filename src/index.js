import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// first of all lets understad how vanilla JS works
// if we want to create an element in vanilla js

// let element = document.createElement("h1");
// element.innerHTML = "Hello World";

// console.log(element);

// Appending to DOM in vanilla JS

// document.querySelector("#root").append(element);

// in above method we have seen that how to create an HTML element using simple js
// now we will see how we can do same using react

// let element2 = React.createElement(
// "h1",
// { id: "header", className: "nav-item" },
// "Hello World"
// );

// console.log(element2);

// Appending to ReactDOM in react
// the process of renering element to the reactDOM is different
// in react first-of-all we have to declair root to react object

let rootElement = document.querySelector("#root");

// let reactRoot = ReactDOM.createRoot(root);
// we can create root like this way also

let root = createRoot(rootElement); // it will work same as ReactDOM.createRoot

// reactRoot.render(element2);

// in the avobe examples we have seen that how plan or vanilla JS is different from react JS
// now we will see that how we can write more simpler and easier code in react

let heading = (
	<h1 id="header" className="nav-item">
		Hello world
	</h1>
);

// more like that

let card = (
	<div id="card" className="card-list">
		<figure>
			<img
				src="https://tse1.mm.bing.net/th?id=OIP.8EhWB1ZZUAC_S8gd3tTlZAHaE3&pid=Api&rs=1&c=1&qlt=95&w=153&h=100"
				width={200}
			/>
			<figcaption>#Hills</figcaption>
		</figure>
	</div>
);

// root.render(card);

// in above code we can see that how we can write more simple code in react

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// some rules to keep in mind while writing code in react

// first of all lets understand the what is JSX Code and None-JSX Code

// Non-JSX Code
// creating element in Non-JSX code

const nonJSXElement = React.createElement(
	"div",
	{ id: "header", className: "nav-item", style: { textAlign: "center" } },
	[
		React.createElement("h1", { id: "heading" }, "Presenting Every where meme"),
		React.createElement("img", {
			src: "https://tse3.mm.bing.net/th?id=OIP.H_-L4Yi3yB6W3ZW3NaKk0wHaFC&pid=Api&P=0&h=180",
			alt: "Every where meme",
			width: "400",
		}),
		React.createElement("h2", null, "See React React Everywhere..."),
	]
);

// root.render(nonJSXElement);
// Rules for non JSX code
// 1. Only Pure Java Script can be written inside JSX template
// 2. camelCase writing convention can be used inside Non JSX Code Template
// 3. All the styling part also has to be in the camelCase etc.

// JSX Code

const JSXElement = (
	<div id="header" style={{ textAlign: "center" }}>
		<h1>Prensenting Every Where Meme</h1>
		<img
			src="https://tse3.mm.bing.net/th?id=OIP.H_-L4Yi3yB6W3ZW3NaKk0wHaFC&pid=Api&P=0&h=180"
			alt="Every Where meme"
			width={200}
		/>
		<h2>See React React Everywhere...</h2>
	</div>
);

// root.render(JSXElement);
// Rules for JSX CODE
// JSX is a mix-up of XML and JS where all the HTML and JS can be used in a single file
// Bable handles all the code and converts it into from Non-JSX to JSX
// inside JSX all the java script goes inside => {} bracets
// In JSX the java script object can not be passed as java script child & directly can-not be accessed we can use key value pair to access the element
// Ex..

const user = {
	name: "Geetesh",
	role: "FWD",
};

const newElement = (
	<div>
		<h3>Name : {user.name}</h3>
		<h3>Role : {user.role}</h3>
	</div>
);

root.render(newElement); // Rendering to the React DOM
reportWebVitals();
