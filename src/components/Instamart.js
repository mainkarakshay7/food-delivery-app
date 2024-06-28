import { useState } from "react";
import { LOREM_IPSUM } from "../constants";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className='flex-col m-3 p-2 border border-b-slate-600'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <button
        onClick={() => setIsVisible(isVisible)}
        className='font-bold underline cursor-pointer'
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState("");

  return (
    <div className='flex-col align-middle justify-center '>
      <h1 className='text-3xl font-bold m-3 mb-14'>Instamart</h1>
      <Section
        title={"About Us"}
        desc={LOREM_IPSUM}
        isVisible={isVisible === "about"}
        setIsVisible={(val) => setIsVisible(val ? "" : "about")}
      />
      <Section
        title={"Team"}
        desc={LOREM_IPSUM}
        isVisible={isVisible === "team"}
        setIsVisible={(val) => setIsVisible(val ? "" : "team")}
      />
      <Section
        title={"Careers"}
        desc={LOREM_IPSUM}
        isVisible={isVisible === "careers"}
        setIsVisible={(val) => setIsVisible(val ? "" : "careers")}
      />
    </div>
  );
};

export default Instamart;
