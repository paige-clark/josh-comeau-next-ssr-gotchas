"use client";
import React from "react";
import Spinner from "../Spinner/Spinner";

function Counter() {
  const [count, setCount] = React.useState(null);

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
      Count: {typeof count === "number" ? count : <Spinner />}
    </button>
  );
}

export default Counter;
