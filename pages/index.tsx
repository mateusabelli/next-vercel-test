import { useState } from "react";
import Link from "next/link";
import About from "./about";

function Home() {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <Link href="./about">
        <button>About</button>
      </Link>
    </>
  );
}

export default Home;

