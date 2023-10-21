"use client";
import ToggleTheme from "@/components/ToggleTheme";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const buttonHandler = (e) => {
    
    setResult(result.concat(e.target.value))
  };
  const clearValues = () => {
    setResult("");
  };
  const calculateValues = () => {
    try{
      setResult(eval(result).toString());
    }
   catch(err){
    setResult("Error")
   }
  };
  const backspace = () =>{
    setResult(result.slice(0,-1));
  }

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="scale-80 lg:scale-125">
        <ToggleTheme />
        <div className="flex flex-row w-80 bg-very-dark-desaturated-blue-screen light:bg-light-gray-screen darkviolet:bg-very-dark-violet-toggle h-20 rounded-lg mt-4 justify-end">
          <span className="font-bold text-3xl self-center mx-4 text-ellipsis truncate">
            {result.length > 0 ? result.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0"}
          </span>
        </div>
        <div className="flex flex-row w-80 h-96 mt-8 lg:h-72 lg:mt-4 darkviolet:bg-very-dark-violet-toggle light:bg-light-gray-toggle bg-very-dark-desaturated-blue-toggle rounded-lg  justify-center p-2">
          <div className="grid grid-cols-4 items-center w-full place-items-center px-1">
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-md shadow-grayish items-center hover:bg-white  light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"7"}
              onClick={(e) => buttonHandler(e)}
            >
              7
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"8"}
              onClick={(e) => buttonHandler(e)}
            >
              8
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"9"}
              onClick={(e) => buttonHandler(e)}
            >
              9
            </button>
            <button
              className="font-bold text-white bg-desaturated-dark-blue-background light:bg-light-cyan-background light:shadow-cyan light:hover:bg-[#62B5BD] darkviolet:bg-very-dark-violet-keys darkviolet:shadow-violet darkviolet:hover:bg-[#8631B0] w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-blue  items-center hover:bg-[#A2B3E1]"
              onClick={backspace}
            >
              DEL
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"4"}
              onClick={(e) => buttonHandler(e)}
            >
              4
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"5"}
              onClick={(e) => buttonHandler(e)}
            >
              5
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"6"}
              onClick={(e) => buttonHandler(e)}
            >
              6
            </button>
            <button
              className="text-2xl lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main  bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"+"}
              onClick={(e) => buttonHandler(e)}
            >
              +
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"1"}
              onClick={(e) => buttonHandler(e)}
            >
              1
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"2"}
              onClick={(e) => buttonHandler(e)}
            >
              2
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"3"}
              onClick={(e) => buttonHandler(e)}
            >
              3
            </button>
            <button
              className="text-2xl lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"-"}
              onClick={(e) => buttonHandler(e)}
            >
              -
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"."}
              onClick={(e) => buttonHandler(e)}
            >
              .
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"0"}
              onClick={(e) => buttonHandler(e)}
            >
              0
            </button>
            <button
              className="text-3xl pt-2 lg:pt-0 lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"/"}
              onClick={(e) => buttonHandler(e)}
            >
              /
            </button>
            <button
              className="text-3xl lg:text-xl font-bold darkblue:text-very-dark-desaturated-blue-main  bg-light-grayish-orange w-[3.5rem] h-14 lg:h-8 rounded-lg shadow-grayish items-center hover:bg-white light:bg-light-yellow-background light:hover:bg-white light:shadow-yellow darkviolet:bg-very-dark-violet-key-background darkviolet:shadow-violet darkviolet:hover:bg-[#6B34AC]"
              value={"*"}
              onClick={(e) => buttonHandler(e)}
            >
              x
            </button>
            <button
              className="text-xl lg:text-base font-bold text-white grid col-span-2 bg-desaturated-dark-blue-background light:bg-light-cyan-background light:shadow-cyan light:hover:bg-[#62B5BD] darkviolet:bg-very-dark-violet-keys darkviolet:shadow-violet darkviolet:hover:bg-[#8631B0] w-[8.5rem] h-14 lg:h-8 rounded-lg shadow-blue items-center hover:bg-[#A2B3E1]"
              onClick={clearValues}
            >
              RESET
            </button>
            <button
              className="textl-xl lg:text-base font-bold text-white grid col-span-2 bg-red-background-toggle  light:bg-light-orange-background light:shadow-orange light:hover:bg-[#FF8B38] darkviolet:bg-very-dark-violet-cyan darkviolet:shadow-lightcyan darkviolet:hover:bg-[#94FFF9] w-[8.5rem] h-14 lg:h-8 rounded-lg shadow-red items-center hover:bg-[#F96C5B]"
              onClick={calculateValues}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
