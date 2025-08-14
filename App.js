// const heading = React.createElement("h1", {id:"heading", class:"heading1"}, "Hello World from React!");
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);

// const parent = React.createElement(
//     "div", {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1", {}, "Hello Tarang Gupta")
//     )
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);  
const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "Hello Tarang Gupta"),
        React.createElement("h2", {}, "Hello Dushyant"),
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "Hello Vansh Varshney"),
        React.createElement("h2", {}, "Hello Abhay Tiwari"),
    ]),
]);
console.log(parent); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);    