import React from "react";
import Header from "../components/Header";
import BlogTile from "../components/BlogTile";

function Blogs() {
  return (
    <div>
      <div
        className="h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1634563064976-ef50d659213c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <Header />
      </div>

      <div className="h-screen bg-[#322E2B] justify-center flex ">
        <div className="w-2/3 mt-20">
          <div className="flex flex-row ">
            <div className="flex-1 flex-col m-5">
              <div className="flex flex-row">
              <p className="text-white font-extrabold uppercase text-5xl">Rahul</p> <p className="text-yellow-400 Actonia font-extrabold uppercase text-5xl">&</p>
              </div>
              <p className="text-white font-extrabold uppercase text-5xl">Fabian's</p>
              <div className="w-full flex justify-end">
              <p className="Actonia text-yellow-400 text-5xl">experiences</p>
              </div>
            </div>
            <div className="flex-1 m-5">
              <p className=" text-[#D8CAB1]">
                Rahul D'Souza and Fabian Franco, both seasoned photographers
                with a shared passion for capturing love stories, eagerly
                anticipate sharing their diverse experiences in photographing
                weddings of all kinds.
              </p>
            </div>
            <div className="flex-1 m-5">
              <p className="text-[#D8CAB1]">
                From the tears of joy exchanged in intimate backyard ceremonies
                to the exhilarating dance floors of grand destination
                extravaganzas, they've experienced the full gamut of wedding
                celebrations.
              </p>
            </div>
          </div>

          <BlogTile imageUrl="https://images.unsplash.com/photo-1646620990701-6ad6af24d32b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwcm9hZHN8ZW58MHx8MHx8fDA%3D"
          date="March 21, 2024"
          length="2 min read"
          location="Goa"
          tags="Wedding, Photography"
          
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
