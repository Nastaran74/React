import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 4) {
      amount = 4;
    }
    console.log(typeof amount);
    setText(data);
    setText(data.slice(0, amount));
  };

  return (
    <div className="App">
      <h4>لورم ساز خوشگل وزیبا</h4>
      <form className="lorem" onSubmit={handleSubmit}>
        <label>تعداد پاراگراف:</label>
        <input
          type="number"
          name="total"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">بساز</button>
      </form>
      <article className="lorem-text">
        <p>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </p>
      </article>
    </div>
  );
}

export default App;
