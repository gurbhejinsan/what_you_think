import { useState } from "react";
import Celebration from "./components/Celebration";
import HeartAnimation from "./components/HeartGoes";
import No from "./components/No";
import Thanks from "./components/Thanks";
import WaitFile from "./components/WaitFile";

const App = () => {
  const [Response, setResponse] = useState<boolean | null>(null);
  const [IsTrue, setIsTrue] = useState(false);

  return (
    <main>
      {!IsTrue ? (
        <>
          <HeartAnimation />
          <WaitFile {...{ Response, setIsTrue, setResponse }} />
        </>
      ) : (
        <>
          <Thanks />
          <Celebration />
        </>
      )}

      <No {...{ setResponse, Response, setIsTrue }} />
    </main>
  );
};

export default App;
