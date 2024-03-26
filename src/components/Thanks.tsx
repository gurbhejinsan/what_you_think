import TypeWriter from "./TypeWriter";

const thanks =
  "I couldn't imagine that you accepted me, thank you from the heart, I didn't believe what you did, it was a little effort, but I worked very hard for it, thanks for everything. 😊";
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
        {/* <button className="btn" onClick={handleNavigateToInstagram}> 
        Home
         </button> */}
      </div>
    </div>
  );
};

export default Thanks;
