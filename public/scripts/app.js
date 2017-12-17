"use strict";

console.log("Inside app.js");

var JSXTemplate = React.createElement(
		"div",
		null,
		React.createElement(
				"h1",
				null,
				" JSX to JS Conversion Understanding "
		),
		React.createElement(
				"p",
				null,
				" Let us understand how JSX is converted into vanilla JavaScript "
		)
);
var viewContainer = document.getElementById('appContainer');

ReactDOM.render(JSXTemplate, viewContainer);
