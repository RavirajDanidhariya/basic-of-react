const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

/***
 * heading is an object which contains details about the react element
 * 
 * {
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
    "id": "heading",
    "children": "Hello World From React!"
    },
    "_owner": null,
    "_store": {}
  }
 * 
 * **/

/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 *      <div id="child2">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 *
 * **/
console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    // React.createElement("h1", {}, "I'm an h1 tag")
    [
      React.createElement("h1", { key: "h1" }, "I'm an h1 tag"),
      React.createElement("h2", { key: "h2" }, "I'm an h2 tag"),
    ]
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/**
 *
 * ReactElemente(object)  ==>  HTML(Browser Understands)
 *
 * root.render takes the heading(object) and converts it into a html tag
 * **/
