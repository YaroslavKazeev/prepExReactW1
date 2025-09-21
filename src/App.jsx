import { useState } from "react";

function Count({ count }) {
  return <h1>Count: {count}</h1>;
}

function Button({ handleClick }) {
  return <button onClick={handleClick}>Add 1!</button>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h2>{feedback}</h2>
      <Count count={count} />
      <Button handleClick={handleIncrement} />
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
