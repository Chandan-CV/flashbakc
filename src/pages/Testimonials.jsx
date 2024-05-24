
import Header from "../components/Header";
import TestimonialTile from "../components/TestimonialTile";

function Testimonials() {
  return (
    <div>
      <div>
        <Header />
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-[70vh] object-cover object-top"
        />
      </div>
      <div className="bg-testimonials flex flex-col justify-center items-center">
        <div className="sm:w-1/2 flex justify-center items-center flex-col">
          <div className="sm:w-[60%] text-nowrap mt-5  flex flex-row">
            <div className="h-[200%]  flex justify-end">
              <span className="sm:text-4xl  text-2xl Actonia text-white ">
                our
              </span>
            </div>
            <span className="text-black Boldy sm:text-4xl text-2xl">
              HAPPY COUPLES
            </span>
          </div>
          <div className="sm:w-[60%] text-nowrap flex justify-end">
            <span className="sm:text-4xl text-2xl Actonia text-black">and</span>{" "}
            <span className="text-white Boldy sm:text-4xl text-2xl">
              THEIR THOUGHTS
            </span>
          </div>
          <TestimonialTile
            name="JOSHUA + MARISSCA"
            content="While planning our wedding we got alot of different input/suggestions from everyone, however the one common suggestion all the married couples gave us was to choose our wedding photographers carefully because everything else we do is for our guests, but our wedding pictures will be only for us and with us for the rest of our lives.
          When we came across their page on Instagram, we instantly knew that we wanted them to capture our big day. We immediately sent an inquiry and honestly while everyone else needed alot of reminders and follow up, Rahul and Fabian were extremely professional and we got a really quick response with all the info we needed. We were already impressed with their work but this took it to the next level!"
            title="We got a couple of pictures the very next day and were so thrilled and mesmerised."
          />
          <TestimonialTile
            name="JOSHUA + MARISSCA"
            content="While planning our wedding we got alot of different input/suggestions from everyone, however the one common suggestion all the married couples gave us was to choose our wedding photographers carefully because everything else we do is for our guests, but our wedding pictures will be only for us and with us for the rest of our lives.

          When we came across their page on Instagram, we instantly knew that we wanted them to capture our big day. We immediately sent an inquiry and honestly while everyone else needed alot of reminders and follow up, Rahul and Fabian were extremely professional and we got a really quick response with all the info we needed. We were already impressed with their work but this took it to the next level!"
            title="We got a couple of pictures the very next day and were so thrilled and mesmerised."
          />
          <TestimonialTile
            name="JOSHUA + MARISSCA"
            content="While planning our wedding we got alot of different input/suggestions from everyone, however the one common suggestion all the married couples gave us was to choose our wedding photographers carefully because everything else we do is for our guests, but our wedding pictures will be only for us and with us for the rest of our lives.

          When we came across their page on Instagram, we instantly knew that we wanted them to capture our big day. We immediately sent an inquiry and honestly while everyone else needed alot of reminders and follow up, Rahul and Fabian were extremely professional and we got a really quick response with all the info we needed. We were already impressed with their work but this took it to the next level!"
            title="We got a couple of pictures the very next day and were so thrilled and mesmerised."
          />
        </div>
      </div>
      <div className=" h-[100%] flex justify-center items-center  ">
        <img
          src="src/assets/images/handhold.svg"
          className="w-100% h-100% pb-0"
          alt="Quote"
        />
      </div>
    </div>
  );
}

export default Testimonials;
