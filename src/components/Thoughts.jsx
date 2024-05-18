import "../App.css";
import React from "react";

function Thoughts() {
  return (
    <div className="">
      <div className="w-full justify-center flex flex-col items-center bg-[#D8CAB1] pt-20">
        <div className="text-6xl text-black font-extralight font-sans flex flex-row w-[80%] mb-20">
          <div className=" h-[55vh] flex-1 flex flex-col flex-nowrap z-30 ">
            <div className="flex flex-row">
              <p className="Actonia text-5xl text-white"> our </p>
              <span className="text-nowrap font-sans font-extrabold">HAPPY COUPLES</span>
            </div>
            <div className="flex flex-row w-full ml-20">
              <p className="Actonia text-5xl mb-auto"> and </p>{" "}
              <span className="text-nowrap font-sans font-extrabold text-white">THEIR THOUGHTS </span>
            </div>
            <div className="font-sans text-lg">
              <span className="text-xl text-black font-sans font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
              <p className="text-left mr-32">
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus. Consequat interdum varius sit
                amet mattis vulputate enim nulla aliquet. <br /> <br /> Venenatis lectus magna
                fringilla urna porttitor. Risus quis varius quam quisque id diam
                vel quam elementum. Facilisi cras fermentum odio eu feugiat
                pretium nibh ipsum consequat. Purus faucibus ornare.
              </p>
            </div>
          </div>
          <div className="relative  right-20">
            <img
              src="src/assets/images/thought.svg"
              alt="Hello"
              className="w-[70vw]"
            />
          </div>
        </div>
      </div>
      <div className="h-[15vh] mt-20 flex flex-row justify-center items-center text-3xl  font-bold font-sans  bg-cover  gap-5">
        <p className="Actonia text-5xl ">OUR </p> AWARDS
        <p className="Actonia text-5xl">& </p> FEATURES
      </div>
      <div className="flex flex-row justify-center items-center gap-10  pb-20  ">
        <div>
          <img src="src/assets/images/fearless.svg" alt="Award1" />
        </div>
        <div>
          <img src="src/assets/images/top100.svg" alt="Award2" />
        </div>
        <div>
          <img src="src/assets/images/mywed.svg" alt="Award3" />
        </div>
      </div>
    </div>
  );
}
export default Thoughts;
