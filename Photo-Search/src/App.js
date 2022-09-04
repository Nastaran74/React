import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResults] = useState("");
  console.log(result);
  const fetchImg = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=8L_6FBPIyZh8gdUaXytUdgk1NZdIgv5FFRDBLWhkjok&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  };

  console.log(value);
  return (
    <div className="App">
      <div className="header">
        <span>جستجو</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={fetchImg}>ارسال</button>
      </div>{" "}
      <div className="gallery">
        {result &&
          result.map((item) => 
            <img key={item.id} src={item.urls.regular} alt="" />
          )}
      </div>
    </div>
  );
}

export default App;
