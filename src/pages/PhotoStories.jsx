import React from "react";
import Header from "../components/Header";
import BgImage from "../assets/images/photostories/bgImage.png";
import PhotoStoryTile from "../components/PhotoStoryTile";

function PhotoStories() {
  const photostories= [{
    name:"Alison + joel",
    location:"Goa",
  },
{
  name: "Gavin + Gayle",
  location: "Mumbai",
},{
  name:"Melissa + John",
  location:"Bangalore",
},
{
  name: "Sara + Mark",
  location: "Kerala",
},
{
  name: "Lara + David",
  location: "Chennai",
},
{
  name: "Megan + Tom",
  location: "Delhi",
},
{
  name: "Lara + David",
  location: "Chennai",
},
{
  name: "Megan + Tom",
  location: "Delhi",

},
{
  name: "Trishala + James",
  location: "Kolkata",
}


]
  return (
    <div>
      <div className="bg-center" style={{ backgroundImage: BgImage }}>
        <img src={BgImage} alt="flashbakc studios" />
        <Header />
      </div>
      <div className="bg-[#EDECE7] flex justify-center items-center">
        <div className="flex flex-col items-center w-[80%]">
          <div className="text-4xl uppercase font-extrabold font-sans tracking-tighter text-black text-center mb-10 mt-10">
            Love <span className="Actonia lowercase"> is the </span> whole thing. <br /> we are only pieces.
          </div>
          <div className="flex flex-col justify-around mb-10 sm:flex-row">
            <div className="flex-1 text-md font-light font-sans m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
            <div className="flex-1 text-md font-light font-sans m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center">
           {photostories.map((photostory,index)=>(
            <PhotoStoryTile name={photostory.name} location={photostory.location} />
           ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoStories;
