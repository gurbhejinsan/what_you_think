
import { CommanProps } from "./interface/comman";

const Thanks = ({ setResponse,Response }: CommanProps) => {
  return (
    <div
      className={` sayNo ${!Response == false && "sayNull"}`}
      onClick={() => setResponse(null)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div>
          <img src="gifs/thanks.gif" alt="" />
        </div>
        <div className="">
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
