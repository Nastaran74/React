import React from "react";
import Content from "./Content";
import ScrollIndicator from "./ScrollIndicator";
import "./index.css";
function App() {
  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li>خانه</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>دوره های من</li>
            <li>آدرس</li>
          </ul>
        </div>
      </header>
      <ScrollIndicator />
      <Content />
    </>
  );
}

export default App;
