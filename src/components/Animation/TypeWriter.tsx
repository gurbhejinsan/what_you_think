import Typewriter from "typewriter-effect";


const TypeWriter = ({paragraph}:{paragraph:string}) => {
  return (
    <div className="typewriter">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(paragraph)
            .pauseFor(1000)
            // .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriter;
