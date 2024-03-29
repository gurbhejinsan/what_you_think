import { ICommanProps } from "../../interface/comman";

const No = ({ setResponse, Response }: ICommanProps) => {
  return (
    <div
      className={` sayNo ${Response == false && "sayNull"}`}
      onClick={() => setResponse(null)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div>
          <img src="gifs/no-no-no.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default No;
