import { useState } from "react";
import Question from "./Question";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <h3>سوالی برایتان پیش آمده است؟؟؟</h3>
      <div className="info">
        {questions.map((question, index) => {
          return <Question key={index} {...question} />;
        })}
      </div>
    </div>
  );
}

export default App;
