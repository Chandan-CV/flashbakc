import uparrow from "../assets/images/uparrow.svg";
import SlideShow from "./SlideShow";

function Slider() {
  return (
    <div className="h-full pt-20 bg-[#EDECE7] p-5">
      <div className="flex flex-col sm:flex-row  items-center justify-center ">
        <div className="flex flex-col text-black p-5">
          <span className="Actonia text-5xl -mb-4">our</span>{" "}
          <span className="ml-10 text-4xl Boldy">STORIES</span>
        </div>
        <div className="Courier text-1xl font-[#4A4A4A]">
          are different and every couple is unique. Your moments become your
          life story and live
          from one generation to the next. Here are your stories through our
          particular way of
          seeing it
        </div>
      </div>
      <div>
        <SlideShow />
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row text-4xl mr-[20%] ml-2 pb-10">
          <img src={uparrow} alt="" className="w-[4vh] ml-10" />{" "}
          <span className="Actonia text-black mb-auto mr-2 text-4xl">
            through
          </span>
          <span className="text-[#ffca00]  Boldy text-5xl">Photos</span>
        </div>
      </div>
    </div>
  );
}
export default Slider;
