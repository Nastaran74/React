import React, { useState } from "react";

import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

function App() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleClick = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };
  return (
    <div className="App">
      <div className="input-feild">
        <span onClick={handleClick}>
          <Icon icon={icon} size={18} />
        </span>
        <input type={type} />
      </div>
    </div>
  );
}

export default App;

//in sample model

// let name = "Saeed";
// const handleClick = () => {
//   name = "Nasrin";
//   console.log(name);
// };
