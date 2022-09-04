import React, { useState, useEffect } from "react";

function ScrollIndicator() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="wraooer">
      <div className="progress">
        <div
          className="progressBarMain"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
