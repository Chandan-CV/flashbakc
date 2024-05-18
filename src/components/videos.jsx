import VideoStoryTile from "./VideoStoryTile";

function Videos() {
  return (
    <div className=" pt-10 bg-texture ">
      <div className="flex w-full ">
        <div className="flex flex-col text-4xl ml-[20%]">
          <span className="Actonia text-white">Through</span>
          <span className="text-yellow-300 ml-24 font-extrabold">Photos</span>
        </div>
      </div>
      <div className="flex flex-row p-20">
        {
          [1,2,3].map((item, index) => (
            <div>
              <VideoStoryTile
              name="Sharma + Sherone"
              location="Jupiter"
              />
            </div>
          ))
        }
      </div>
      <div className="flex flex-row-reverse h-30 items-center justify-center"/>
    </div>
  );
}
export default Videos;
