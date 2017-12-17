console.log("Inside app.js");

var JSXTemplate = ( <div>
		<h1> JSX to JS Conversion Understanding </h1> 
		<p> Let us understand how JSX is converted into vanilla JavaScript </p> 
	</div>
);
const viewContainer = document.getElementById('appContainer');

ReactDOM.render(JSXTemplate,viewContainer);