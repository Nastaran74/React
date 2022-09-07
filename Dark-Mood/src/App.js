import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const getMode = () => {
    const initialMode = localStorage.getItem("mode");
    if (initialMode == null) {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        return true;
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  };

  const [dark, setDark] = useState(getMode);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما...</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDark(!dark)}
                checked={dark}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <h1>
            {dark
              ? "لایت مود فعاله و فضا روشنه"
              : "دارک مود فعال شده و فضای دارکی داریم"}
          </h1>
          <p>این فضای لایت مود است والان صفحه سفید است</p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-item">
              <img
                src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="pic"
              />
              <h2>کارت اول</h2>
              <p>این کارت اول است </p>
            </div>
            <div className="card-item">
              <img
                src="https://images.pexels.com/photos/2176593/pexels-photo-2176593.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="pic"
              />
              <h2>کارت دوم</h2>
              <p>این کارت دوم است </p>
            </div>{" "}
            <div className="card-item">
              <img
                src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="pic"
              />
              <h2>کارت سوم</h2>
              <p>این کارت سوم است </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
