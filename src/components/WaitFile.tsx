import { MouseEventHandler } from "react";
import TypeWriter from "./Animation/TypeWriter";
import { ICommanProps } from "../interface/comman";
import { paragraph } from "../constant.ts";



const WaitFile = ({ setIsTrue, setResponse }: ICommanProps) => {
  let lastQuadrant = -1;
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const button = e.target as HTMLButtonElement;
    const parent = button.parentElement as HTMLElement;

    // Calculate random position within the parent element's boundaries

  // Divide area into quadrants for more even random distribution
  const quadrants = [
    { xRange: [0, 0.4], yRange: [0, 0.4] },  // top-left
    { xRange: [0.6, 1], yRange: [0, 0.4] },  // top-right
    { xRange: [0, 0.4], yRange: [0.6, 1] },  // bottom-left
    { xRange: [0.6, 1], yRange: [0.6, 1] },  // bottom-right
    { xRange: [0.3, 0.7], yRange: [0.3, 0.7] } // center-ish
  ];

  // Pick a new quadrant that’s not the same as last time
  let quadrantIndex;
  do {
    quadrantIndex = Math.floor(Math.random() * quadrants.length);
  } while (quadrantIndex === lastQuadrant);
  lastQuadrant = quadrantIndex;

  const q = quadrants[quadrantIndex];

  // Random position within chosen quadrant
  const left = Math.floor(
    (Math.random() * (q.xRange[1] - q.xRange[0]) + q.xRange[0]) *
      (parent.clientWidth - button.clientWidth)
  );

  const top = Math.floor(
    (Math.random() * (q.yRange[1] - q.yRange[0]) + q.yRange[0]) *
      (parent.clientHeight - button.clientHeight)
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
            className="btn sake"
            onClick={() => {
              setResponse(true);
              setIsTrue(true);
            }}
          >
            Yes 😊
          </button>
          {/* <button
            className="btn"
            onClick={() => {
              setResponse(true);
              setIsTrue(true);
            }}
          >
            Yes 😊
          </button> */}
        </div>
        <div>
          <button onClick={handleClick} className="btn">
            No 😔
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitFile;
