import { useState } from "react";

function Count({ count }) {
  return <h1>Count: {count}</h1>;
}

function Button({ handleClick }) {
  return <button onClick={handleClick}>Add 1!</button>;
}

function Button2({ handleClick2 }) {
  return <button onClick={() => handleClick2("+")}>Add 1!</button>;
}

function Button3({ handleClick2 }) {
  return <button onClick={() => handleClick2("-")}>Subtract 1!</button>;
}

function Button4({ handleClick2 }) {
  return (
    <button
      onClick={() => {
        handleClick2("+");
        handleClick2("+");
      }}
    >
      Add 2!
    </button>
  );
}

function Button5({ handleClick2 }) {
  return (
    <button
      onClick={() => {
        handleClick2("-");
        handleClick2("-");
      }}
    >
      Subtract 2!
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  function handleIncrement2(sign) {
    if (sign === "+") {
      setCount((prevCount) => prevCount + 1);
    }
    if (sign === "-" && count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <>
      <h2>{feedback}</h2>
      <Count count={count} />
      <Button handleClick={handleIncrement} />
      <Button2 handleClick2={handleIncrement2} />
      <Button3 handleClick2={handleIncrement2} />
      <Button4 handleClick2={handleIncrement2} />
      <Button5 handleClick2={handleIncrement2} />
    </>
  );
}

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
