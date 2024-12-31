import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import { useState } from "react";

const svgMap = {
  // Whenever we are writing out an abject, where a key is identical to the value sa the exact same word, we can abbreviate it as just one word.
  // example -> bird: bird same like one word bird...
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <div onClick={handleClick}>
        <img alt="animal" src={svgMap[type]} />
        <img 
        src={heart}
         alt="heart"
         style={{width: 10 + 10 * clicks}} />
      </div>
    </>
  );
};

export default AnimalShow;
