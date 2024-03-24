import { MouseEventHandler, useState } from "react";
import TypeWriter from "./components/TypeWriter";
import HeartAnimation from "./components/HeartGoes";
import Celebration from "./components/Celebration";
import Thanks from "./components/Thanks";
import No from "./components/No";

const App = () => {
  const [Response, setResponse] = useState<boolean | null>(null);
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const button = e.target as HTMLButtonElement;
    const parent = button.parentElement as HTMLElement;

    // Calculate random position within the parent element's boundaries
    const left = Math.floor(
      Math.random() * (parent.clientWidth - button.clientWidth)
    );
    const top = Math.floor(
      Math.random() * (parent.clientHeight - button.clientHeight)
    );

    // Set the button's position using inline styles
    button.style.position = "absolute";
    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
    setResponse((res) => (res == false ? null : false));
  };

  return (
    <main>
      {!Response ? <HeartAnimation /> : <Celebration />}
      <div className="box">
        <div>
          <img id="waiting" src="gifs/waiting.gif" className="waiting" alt="" />
          {/* <img src="/gifs/click on no.gif" alt="" /> */}
          {/* <img src="/public/gifs/no-no-no.gif" alt="" /> */}
          {/* <img src="/public/gifs/thanks.gif " alt="" /> */}
        </div>
        <div className="typeBox">
          <TypeWriter />
        </div>
        <div>
          <div>
            <button onClick={() => setResponse(true)}>Yes</button>
          </div>
          <div>
            <button onClick={handleClick}>No</button>
          </div>
        </div>
      </div>
      
      <No {...{setResponse,Response}}/>
      <Thanks {...{setResponse,Response}}/>
    </main>
  );
};

export default App;
