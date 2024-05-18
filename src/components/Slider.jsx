import SlideShow from "./SlideShow";

function Slider() {
  return (
    <div className="h-full mt-20">
      <div className="flex flex-col sm:flex-row  items-center justify-center ">
        <div className="flex flex-col text-black p-5">
          <span className="Actonia text-5xl -mb-4">our</span>{" "}
          <span className="ml-10 text-4xl font-sans font-extrabold">
            STORIES
          </span>
        </div>
        <div>
          are different and every couple is unique. Your moments become your
          life story and live<p></p>
          from one generation to the next. Here are your stories through our
          particular way of<p></p>
          seeing it{" "}
        </div>
      </div>
      <div>
        <SlideShow />
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col text-4xl mr-[20%]">
          <span className="Actonia">Through</span>
          <span className="text-yellow-300 ml-24 font-extrabold">Photos</span>
        </div>
      </div>
    </div>
  );
}
export default Slider;
