import "./App.css";

import Review from "./Review";
function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="title">
            <h2>نظرات همکاران</h2>
          </div>
          <Review />
        </div>
      </main>
    </div>
  );
}

export default App;
