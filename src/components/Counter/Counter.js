"use client";
import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  // Number(window.localStorage.getItem("saved-count")

  React.useEffect(() => {
    const savedValue = window.localStorage.getItem("saved-count");

    if (typeof savedValue === null) {
      return;
    }

    setCount(Number(savedValue));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("saved-count", count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;
