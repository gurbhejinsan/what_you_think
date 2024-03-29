import { MouseEventHandler } from "react";
import TypeWriter from "./Animation/TypeWriter";
import { ICommanProps } from "../interface/comman";

const paragraph =
  " Hi Shikha.....!  Now I wan't to say something special to you. So, Please read everything carefully...! When I saw you for the first time You seems something Special to me. As the days goes you get closer to me....! I don't know the reason why your thoughts always resonates inside my mind...! Everything about you is always intresting for me...! I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...! Earlier I loved MSG and my parents but now I am done with you too.... ! I Love U  Shikha.....! Give me One chance to Prove my Love ...!";
  

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
