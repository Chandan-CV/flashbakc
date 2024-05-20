import { Link } from "react-router-dom";

import githubIcon from "../assets/img/github-icon.png";
<<<<<<< HEAD
=======
import { useState } from "react";
import MovingComponent from "react-moving-text";
>>>>>>> 6b1cc4d241d669e92b480533a9dbb2440d19848b

import telIcon from "../assets/icons/icon-phone.avif";
import chatIcon from "../assets/icons/icon-chat.webp";
import emailIcon from "../assets/icons/icon-email.webp";

function Footer() {
<<<<<<< HEAD
  return (
    <footer className="footer">
      <div className="flex flex-col justify-center items-center  ">
=======
  const [CurrentStuff, setCurrentStuff] = useState(0);
  setTimeout(() => {
    if (CurrentStuff == 5) setCurrentStuff(0);
    else setCurrentStuff(CurrentStuff + 1);
  }, 2000);
  const stuff = [
    "IN TOUCH",
    "TOGETHER",
    "FOREVER",
    "CREATIVE",
    "STARTED",
    "LOUD",
  ];
  return (
    <footer className="footer bg-footertext">
      {/* <div className="flex flex-col justify-center items-center  ">
>>>>>>> 6b1cc4d241d669e92b480533a9dbb2440d19848b
        <img
          src="src/assets/images/handhold.svg"
          className=" w-full"
          alt="Quote"
        />
        <section className="nletter">
          <div className="nletter--wrapper">
            <h3 className="nletter__title">Be a part of the Grayscales</h3>
            <span className="nletter__promo">
              Enjoy 10% off your first purchase when you sign up!
            </span>
            <form
              action=""
              className="nletter__form text-white"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                name="email"
                id="nletter__email"
                className=" bg-black border-2 border-white px-4  text-white"
                placeholder="Enter your email here"
                minLength={1}
              />
              <button
                type="submit"
                className="nletter__submit bg-white border-none"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>

      <div className="footer-main bg-black text-gray-500">
        <div className="footer-sv">
          <section className="footer-sv__links--container">
            <ul className="footer-sv__links">
              <h5 className="footer-sv__link--header">Company</h5>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Our Story
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Shop Locations
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Virtual
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Eyecare
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Philanthropy
                </Link>
              </li>
            </ul>
            <ul className="footer-sv__links">
              <h5 className="footer-sv__link--header">Brand</h5>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Style & Fit
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Craftsmanship
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Reviews
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Blog
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Press
                </Link>
              </li>
            </ul>
            <ul className="footer-sv__links">
              <h5 className="footer-sv__link--header">Help</h5>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Shipping & Returns
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Repairs
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Warranty
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  FAQ
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </section>
          <section className="footer-sv__contact">
            <h4 className="footer-sv__contact-title">
              Ask a Grayscale Specialist
            </h4>
            <p className="footer-sv__contact-text">
              Whether you&apos;re a collector or visiting for the first time,
              we&apos;re here to assist!
            </p>
            <ul className="footer-sv__contact-info">
              <li className="footer-sv__contact-tel">
                <img
                  src={telIcon}
                  alt="Telephone Icon"
                  className="footer-sv__contact-icon"
                  />
                <span className="footer-sv__contact-label">
                  (000)-Grayscale
                </span>
              </li>
              <li className="footer-sv__contact-email">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="footer-sv__contact-icon"
                  />
                <span className="footer-sv__contact-label">
                  support@Grayscale.xyz
                </span>
              </li>
              <li className="footer-sv__contact-message">
                <img
                  src={chatIcon}
                  alt="Chat Icon"
                  className="footer-sv__contact-icon"
                  />
                <span className="footer-sv__contact-label">Chat with Us</span>
              </li>
            </ul>
          </section>
        </div>
        <ul className="footer-bottom">
          <span className="footer-bottom__link">&copy; 2024 Grayscale</span>
          <Link to="/" className="footer-bottom__link">
            Privacy
          </Link>
          <Link to="/" className="footer-bottom__link">
            Accessibility
          </Link>
          <Link to="/" className="footer-bottom__link">
            Terms of Service
          </Link>
          <Link to="/" className="footer-bottom__link">
            Refund Policy
          </Link>
          <Link to="/" className="footer-bottom__link">
            Conformity
          </Link>
        </ul>
      </div>
      <div className="footer-gh">
        <a
          href="https://github.com/annihilator544"
          target="_blank"
          className="footer-gh__link"
          rel="noopener noreferrer"
          >
          <img
            src={githubIcon}
            alt="Github icon"
            width="18"
            className="footer-gh__img"
            />
          <p className="footer-gh__desc">Developed by Vedant Palekar</p>
        </a>
        <small className="footer-gh__copyright">
          &copy; Copyright {new Date().getFullYear()} Vedant Palekar rights
          reserved.{" "}
        </small>
      </div>
            </div> */}

      <div className="h-[300px] w-full flex flex-row justify-between items-center px-20 ">
        <div className="flex-1">
        <img src="src/assets/images/footerLogo.svg" className=" w-[57px] pt-[60px]" alt="Quote" />
        </div>
        <div className="flex-1 text-4xl Boldy text-white text-center pb-[50px]">
          Let's Get
          <div className="text-yellow-300" key={CurrentStuff}>
            <MovingComponent
              id="moving"
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
            >
              {stuff[CurrentStuff]}
            </MovingComponent>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-end items-end pt-[100px] ">
          <span className="Boldy text-2xl self-end text-[#D8CAB1] ">Write to us:</span>
          <a href="mailto:heythere@flashbakc-studios.com" className="text-white Courier text-1xl ">heythere@flashbakc-studios.com</a>
        </div>
      </div>
            <div className="border border-white w-full px-20 pb-[50px] ">
              <hr className="border-[#4A4A4A]" />
              <div className="flex flex-row justify-between text-sm pt-5">
                <span>© 2024 Flashbakc Studios Fabian & Rahul. All rights reserved.</span>
                <div className="flex flex-row">
                  <span className="mr-2">Privacy Policy</span>
                  <span className="mr-2">Terms & Conditions</span>
                  <span className="">Copyright</span>
                </div>
                <div className="flex flex-row">
                  <span className="mr-2 ">Designed & developed with intention by</span>
                  <img src="src/assets/images/MOAM.svg" alt="" width={57} height={50} />
                </div>
              </div>
            </div>
    </footer>
  );
}

export default Footer;
