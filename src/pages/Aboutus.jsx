import React from "react";
import Header from "../components/Header";
import bgimage from "../assets/images/aboutus/dust scratches.png";
import GetInTouch from "../components/GetInTouch";

function Aboutus() {
  return (
    <div>
      <div
        className="h-screen bg-center flex flex-col justify-end"
        style={{
          backgroundImage: `url('src/assets/images/photostories/bgimg3.png')`,
        }}
      >
        <Header />
        <div className="w-full flex flex-row justify-end text-white uppercase text-5xl mb-10 pr-10 Boldy">
          <p className="text-[#FFCA00] tracking-tighter">Friendly.</p>
          <p className="tracking-tighter mr-2 ml-2">Relaxed.</p>
          <p className="text-[#FFCA00] tracking-tighter">Stress-Free</p>
        </div>
      </div>
      <div className="bg-[#D8CAB1] flex flex-row justify-center">
        <div className="flex flex-row w-[60%] mt-20">
          <div className="flex flex-col m-5">
            <p className="Actonia text-5xl -mb-4">our</p>
            <p className="uppercase text-black text-4xl Boldy">
              Flashbakc
            </p>
            
            <p className="Courier  text-[#4A4A4A]">
              <br />
              Hi! Welcome to Flashbakc Studios. Narrow roads, winding lanes,
              coconut grooves, fields on both sides, and you will find us
              situated, working out of the comfort of our home, sippin' some gin
              and tonic or urrak (local drink), listening to some indie or
              reggae music and working our magic in creating a fairytale out of
              reality.
              <br />
              <br />
              Founded by Rahul D'Souza and Fabian Franco, who lived in the same
              neighborhood in Goa, knowing each other only by face. They met
              unexpectedly in the same hostel in Bandra, Mumbai.
            </p>
          </div>
          <div>
            <p className=" Courier  text-[#4A4A4A] m-5 mt-7">
              Rahul, working as a concept artist in a gaming studio and Fabian,
              pursuing his masters in Social work, kicked off a new journey of
              friendship.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pell.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum velit euismod in pellentesque massa placerat duis
              ultricies lacus. Massa tincidunt dui ut ornare lectus sit amet est
              placerat. Consectetur purus ut faucibus pulvinar elementum. Dolor
              sit amet consectetur adipiscing elit pellentesque.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-texture flex flex-col justify-center items-center min-h-screen ">
        <div className=" text-white uppercase text-4xl tracking-tighter Boldy">
          <span className="Boldy text-[#FFCA00] uppercase ">
            questions
          </span>{" "}
          <br /> <span className="Actonia lowercase">you</span> may have
        </div>
        <div className="flex flex-row w-[70%] mt-5">
          <p className="flex-1 text-[#FFCA00] text-right mr-5 text-3xl uppercase Boldy">
            what is your style?
          </p>
          <p className="flex-[2] text-[#D8CAB1] Courier ">
            Our working style is super friendly, relaxed and stress-free. We’re
            all about capturing the memories that happen all around, and not
            just with the couple. Documentary and intimates is our main focus.
            Simplicity and Blending in, is our key approach. We know how to
            capture your moments in the most unique and simple manner. We love
            the emotion, joy, craziness and uniqueness to every wedding.
          </p>

        </div>
        <div className="flex flex-row w-[70%] mt-5">
          <p className="flex-1 text-[#FFCA00] text-right mr-5 text-3xl uppercase Boldy">
            I'm camera conscious...
          </p>
          <p className="flex-[2] text-[#D8CAB1] Courier ">
          Nervous about posing or camera shy? Don’t need to worry! We do not ask you to pose or hold a shot for us. We shoot you as the day is unfolding, with you and your family as your natural selves. We know how to get you to giggle, laugh and do all sorts of cute little things for our camera, without you even knowing it..
          </p>
        
        </div>
        <div className="flex flex-row w-[70%] mt-5">
          <p className="flex-1 text-[#FFCA00] text-right mr-5 text-3xl uppercase Boldy ">
            What are your charges?
          </p>
          <p className="flex-[2] text-[#D8CAB1] Courier ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Cras semper auctor neque vitae tempus quam. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.
          </p>
        
        </div>
      
      </div>
      <GetInTouch/>
    </div>
  );
}

export default Aboutus;
