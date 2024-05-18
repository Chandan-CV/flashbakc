import Slider from "react-slick"
import PhotoStoryTile from "./PhotoStoryTile";

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        },
        {
        original: "https://picsum.photos/id/1019/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

function SlideShow(){
  return (
    <div className=" justify-center text-[#211E1D] bg-gradient-to-r from-[#F6C0A905] to-[#EB9ABA05] flex flex-row">
    {/* <Slider {...settings} className=" flex w-full  gap-5"> */}
    {[1,2,3,4].map((image, index) => (
      <div key={index} className=" mx-4">
      <PhotoStoryTile
      name="Sharma + Sherone"
      location="Mars"
      />
      </div>
    ))}
    {/* </Slider> */}
    </div>
  )
}

export default SlideShow;