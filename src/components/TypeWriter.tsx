import Typewriter from "typewriter-effect";
const paragraph =
  " Hi SweetHeart.....!  Now I wan't to say something special to you. So, Please read everything carefully...! When I saw you for the first time You seems something Special to me. As the days goes you get closer to me....! I don't know the reason why your thoughts always resonates inside my mind...! Everything about you is always intresting for me...! I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...! Earlier I loved MSG and my parents but now I am done with you too.... ! I Love U SweetHeart.....! Give me One chance to Prove my Love ...!";

const TypeWriter = () => {
  return (
    <div>
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
