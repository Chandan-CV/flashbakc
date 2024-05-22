import PhotoStoryTile from "./PhotoStoryTile";

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
const images = [
  { id: 1, src: "https://picsum.photos/id/1018/1000/600/" },
  { id: 2, src: "https://picsum.photos/id/1015/1000/600/" },
  { id: 3, src: "https://picsum.photos/id/1019/1000/600/" },
  { id: 4, src: "https://picsum.photos/id/1015/1000/600/" },
];



function SlideShow(){
  return (
    <div className=" justify-start text-[#211E1D] bg-gradient-to-r from-[#F6C0A905] to-[#EB9ABA05] flex flex-row Boldy overflow-x-scroll min-w-screen">
    {/* <Slider {...settings} className=" flex w-full  gap-5"> */}
    { images.map((image) => (
  <div key={image.id} className="sm:mx-4 ">
    <PhotoStoryTile
      name="MELANIE + ELROY,"
      location="GOA"
    />
      </div>
    ))}
    {}
    </div>
  )
}

export default SlideShow;