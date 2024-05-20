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


]
  return (
    <div>
      <div className="bg-center" style={{ backgroundImage: BgImage }}>
      <img src = "src/assets/images/photostories/bgimage.png" className='w-100% h-100% pb-0' alt="Quote"/>
        <Header />
      </div>
      <div className="bg-[#EDECE7] flex justify-center items-center">
        <div className="flex flex-col items-center w-[85%]">
          <div className="text-4xl uppercase Boldy  tracking-tighter text-black text-center mb-10 mt-10 ">
            Love <span className="Actonia lowercase"> is the </span> whole thing. <br /> we are only pieces.
          </div>
          <div className=" Courier flex flex-col justify-around mb-10 sm:flex-row w-[70%] ">
            <div className=" Courier flex-1 text-md   m-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
            <div className="Courier flex-1 text-md  m-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </div>
          </div>
          <div className=" Courier flex flex-row flex-wrap justify-center items-center pb-[100px]">
           {photostories.map((photostory,index)=>(
            <PhotoStoryTile name={photostory.name} location={photostory.location} />
           ))}
          </div>
        </div>
      </div>
      <div className=' h-[100%] flex justify-center items-center  '>
      <img src = "src/assets/images/handhold.svg" className='w-100% h-100% ' alt="Quote"/>
    </div>
    </div>
  );
}

export default PhotoStories;
