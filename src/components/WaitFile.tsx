import { MouseEventHandler } from "react";
import TypeWriter from "./Animation/TypeWriter";
import { ICommanProps } from "../interface/comman";
import { paragraph } from "../constant";



const WaitFile = ({ setIsTrue, setResponse }: ICommanProps) => {
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
    <div className="box">
      <div>
        <img id="waiting" src="gifs/waiting.gif" className="waiting" alt="" />
      </div>
      <div className="typeBox">
        <TypeWriter paragraph={paragraph} />
      </div>
      <div>
        <div>
          <button
            className="btn"
            onClick={() => {
              setResponse(true);
              setIsTrue(true);
            }}
          >
            Yes
          </button>
        </div>
        <div>
          <button onClick={handleClick} className="btn">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitFile;
