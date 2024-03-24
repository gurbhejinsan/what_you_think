import TypeWriter from "./TypeWriter";
import { CommanProps } from "./interface/comman";

const thanks =
  "I couldn't imagine that you accepted me, thank you from the heart, I didn't believe what you did, it was a little effort, but I worked very hard for it, thanks for everything. 😊";
const Thanks = ({ Response }: CommanProps) => {
  return (
    <div className={` sayNo ${!Response == false && "sayNull"}`}>
      <div>
        <div>
          <img src="gifs/thanks.gif" alt="" />
        </div>
        <div className="typeBox">
          <TypeWriter paragraph={thanks} />
        </div>
        <div>
          <button
            onClick={() =>
              (location.href =
                "https://www.instagram.com/imnot_gurbhej/?utm_source=qr")
            }
          >
            {" "}
            Contect Me 😊
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
