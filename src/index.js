//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
//var react and react-dom
var React = require("react");
var ReactDOM = require("react-dom");
//render
ReactDOM.render(
  <div>
    <h1>My fav Stationery Items</h1>
    <ul>
      <li>Pens</li>
      <li>Sticky notes</li>
      <li>Journal</li>
    </ul>
  </div>,
  document.getElementById("root")
);
