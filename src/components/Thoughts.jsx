import "../App.css";

function Thoughts() {
  return (
    <div className="">
      <div className="w-full justify-center flex flex-col items-center bg-[#D8CAB1] pt-20 ">
        <div className="sm:text-5xl text-3xl text-black Boldy flex-col  flex sm:flex-row w-[80%] mb-20">
          <div className=" h-[55vh] flex-1 flex flex-col flex-nowrap z-30 w-[] pb-10 items-center">
            <div className=" w-full flex flex-col ">
              <div className="flex flex-row sm:pl-[10vh] w-min justify-self-start">
                <p className="Actonia sm:text-5xl text-white"> our </p>
                <span className="text-nowrap  Boldy">HAPPY COUPLES</span>
              </div>
              <div className="flex flex-row sm:ml-20 justify-self-end  w-min ml-[10%]">
                <p className="Actonia sm:text-5xl mb-auto sm:pl-[20vh]">
                  {" "}
                  and{" "}
                </p>{" "}
                <span className="text-nowrap Boldy text-white">
                  THEIR THOUGHTS{" "}
                </span>
              </div>
            </div>
            <div className="Courier text-xl pb-15 sm:w-[90%] px-5 w-full pt-10">
              <span className=" text-black sm:w-[50%] pr-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </span>
              <p className="w-full  mr-20 text-[#4A4A4A] text-lg">
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus. Consequat interdum varius sit
                amet mattis vulputate enim nulla aliquet. <br /> <br />{" "}
                Venenatis lectus magna fringilla urna porttitor. Risus quis
                varius quam quisque id diam vel quam elementum.
              </p>
            </div>
          </div>
          <div className="sm:relative  right-20 p">
            <img
              src="src/assets/images/thought.svg"
              alt="Hello"
              className="sm:w-[35vw]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#EDECE7]">
        <div className="h-[15vh] pt-20 flex text-md sm:flex-row justify-center items-center text-3xl sm:text-3xl  Boldy bg-cover gap-2 pb-10">
  

          <span className="Actonia sm:text-5xl mb-4">our</span>{" "}
          <span className="text-[#FFCA00] Boldy sm:text-5xl">AWARDS</span>
          <span className="Actonia sm:text-5xl">&</span>{" "}
          <span className=" Boldy sm:text-5xl text-[#1c1c1c]">STORIES</span>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-10  pb-20  ">
          <div>
            <img
              src="src/assets/images/fearless.png"
              alt="Award1"
              className="h-[120px]"
            />
          </div>
          <div>
            <img
              src="src/assets/images/fearless1.png"
              alt="Award2"
              className="h-[120px]"
            />
          </div>
          <div>
            <img
              src="src/assets/images/mywed2.png"
              alt="Award3"
              className="h-[120px]"
            />
          </div>
        </div>
      </div>
      <div className=" sm:h-[100%] h-[450px] object-cover flex justify-center items-center  ">
        <img
          src="src/assets/images/handhold.svg"
          className="object-cover h-[450px] sm:h-full pb-0"
          alt="Quote"
        />
      </div>
    </div>
  );
}
export default Thoughts;
