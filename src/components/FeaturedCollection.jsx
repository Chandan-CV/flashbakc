import "../App.css";

function FeaturedCollection() {
  return (
    <div className="bg-texture h-full bg-fixed">
      <div className="min-h-[70vh] bg-aboutus sm:grid sm:grid-cols-2 sm: gap-1 flex flex-col  text-white text-6xl Boldy pt-[13vh] pb-20  p-5 sm:pl-20">
        <div className=" h-[60vh] flex flex-col sm:flex-row flex-nowrap">
          <img src="src/assets/images/about.svg" alt="hello" />
        </div>
        <div className="text-5xl Boldy  flex-col flex gap-10 pl-10   items-center justify-center">
          <strong>
            <p>
              Behind<p></p>
              <div className=" flex-row flex gap-2">
                {" "}
                <p className="Actonia text-5xl mb-auto lowercase ml-10">
                  the
                </p>{" "}
                <p className="text-[#FFCA00]"> brand</p>
              </div>
            </p>
            <div className="text-lg flex-col flex gap-10 pt-5">
              <div className="Courier">
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <p></p> sed do eiusmod tempor incididunt ut labore et dolore
                  magna <p></p> aliqua. Justo laoreet sit amet cursus.Consequat
                  interdum <p></p> varius sit amet mattis vulputate enim nulla
                  aliquet.<p></p>
                </h1>{" "}
              </div>
              <div className="Courier">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<p></p>{" "}
                sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
                <p></p> aliqua. Justo laoreet sit amet cursus.Consequat interdum{" "}
                <p></p> varius sit amet mattis vulputate enim nulla aliquet.
                <p></p>
              </div>
            </div>
          </strong>
        </div>
      </div>
      <div className="h-[80vh] mt-20 bg-newCollection flex flex-col justify-center items-center text-5xl Boldy bg-center bg-cover text-white" />

      {/* <div>
         wait da
        </div> */}
    </div>
  );
}
export default FeaturedCollection;
