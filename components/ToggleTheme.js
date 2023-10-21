"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(0);
  const toggleState = () => {
    setToggle((prevState) => (prevState + 1) % 3);
  };
  useEffect(() => {
    if (toggle === 0) {
      setTheme("dark-blue");
    } else if (toggle === 1) {
      setTheme("light");
    } else {
      setTheme("dark-violet");
    }
  }, [toggle]);
  const themeHandle = () => {
    if (toggle === 0) {
      return "justify-start";
    } else if (toggle === 1) {
      return "justify-center";
    } else {
      return `justify-end`;
    }
  };
  return (
    <div className="flex flex-row text-center justify-between px-10 lg:px-2 scale-125 lg:scale-100">
      
      <h1 className=" text-xl font-bold">calc</h1>
      <div className="flex flex-row items-center space-x-4">
        <span className="flex flex-col justify-center uppercase text-xs font-medium ">
          theme
        </span>
        <div className="flex flex-col">
          <div className="w-12 text-[0.6rem] -mt-5 space-x-3 font-bold">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div
            className={`flex flex-row items-center w-12 h-4 p-[0.2rem] bg-very-dark-desaturated-blue-toggle light:bg-light-gray-toggle rounded-lg darkviolet:bg-very-dark-violet-toggle ${themeHandle()}`}
            onClick={toggleState}
          >
            <motion.div
              className={`bg-red-background-toggle hover:bg-[#F96C5B] light:bg-light-orange-background light:hover:bg-[#FF8B38] darkviolet:bg-very-dark-violet-cyan darkviolet:hover:bg-[#94FFF9] rounded-full w-3 h-3 z-10 ${
                toggle ? `justify-start` : "justify-end"
              }`}
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleTheme;
