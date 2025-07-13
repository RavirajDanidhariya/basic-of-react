import React from "react";
import ReactDOM from "react-dom/client";

/**
 * React.createElement ==> React Element - JS Object ==> HTMLElemente (render)
 * **/
const normalHeading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React🚀"
);

console.log(normalHeading);

/**
 * JSX - it is not HTML in JS
 * JSX - HTML-like  or XML-like syntax
 *
 * JSX - JS engine does not understands this JSX
 *
 * JSX (transplied before it reaches the JS) -> PARCEL -> Babel
 *
 * JSX ==> React.createElement (by PARCEL using Babel) ==> React Element - JS Object ==> HTMLElemente (render)
 * **/

// React Element
const heading = (
  <h1 id="heading" tabIndex="1" className="heading">
    Namaste React Using JSX Element
  </h1>
);

console.log(heading);

const Title = () => {
  return (
    <>
      <h1 className="heading" tabIndex="2">
        Title Component
      </h1>
      {heading}
    </>
  );
};

// React Component
// Class Based Component
// Functional Component

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <Title></Title>
      {Title()}
      <h1>Heading Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // JSX Element
root.render(<HeadingComponent />); // Functional Component
