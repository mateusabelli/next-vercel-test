import { useState } from "react";

function Home() {
  const [counter, setCounter] = useState<number>();

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </>
  );
}

export default Home;

