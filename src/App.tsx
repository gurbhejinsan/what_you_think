import { MouseEventHandler } from "react";
import TypeWriter from "./components/TypeWriter";

const App = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const button = e.target as HTMLButtonElement;
    const parent = button.parentElement as HTMLElement;

    // Calculate random position within the parent element's boundaries
    const left = Math.floor(Math.random() * (parent.clientWidth - button.clientWidth));
    const top = Math.floor(Math.random() * (parent.clientHeight - button.clientHeight));

    // Set the button's position using inline styles
    button.style.position = "absolute";
    button.style.left = `${left}px`;
    button.style.top = `${top}px` ;
  };

  return (
    <main>
      <div className="box">
        <div>
          <img
            id="waiting"
            src="/gifs/waiting.gif"
            className="waiting"
            alt=""
          />
          {/* <img src="/gifs/click on no.gif" alt="" /> */}
          {/* <img src="/public/gifs/no-no-no.gif" alt="" /> */}
          {/* <img src="/public/gifs/thanks.gif " alt="" /> */}
        </div>
        <div>
          <TypeWriter />
        </div>
        <div>
          <button>Yes</button>
          <button onClick={handleClick}>No</button>
        </div>
      </div>
    </main>
  );
};

export default App;
