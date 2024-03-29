import { useState } from "react";
import { Celebration, HeartAnimation, LoginForm, No, Thanks, WaitFile } from "./components";
import { useAppContext } from "./strore/useAppContext";

const App = () => {
  const [Response, setResponse] = useState<boolean | null>(null);
  const [IsTrue, setIsTrue] = useState(false);
  const { state } = useAppContext();

  if (!state.Verify) {
    return (
      <main>
        <LoginForm />
      </main>
    );
  }
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
