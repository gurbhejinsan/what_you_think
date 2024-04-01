import { thanks } from "../../constant";
import TypeWriter from "../Animation/TypeWriter";

const Thanks = () => {
  return (
    <div className="box">
      <div className="thanks_gif">
        <img src="gifs/thanks.gif " alt="" />
      </div>
      <div className="typeBox">
        <TypeWriter paragraph={thanks} />
      </div>
      <div className="Contactbtn">
        <a
          className="btn"
          href={`https://www.instagram.com/direct/t/17844248741746543/`}
          target="_blank"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Thanks;
