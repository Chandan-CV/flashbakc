import { Link } from "react-router-dom";

import githubIcon from "../assets/img/github-icon.png";

import telIcon from "../assets/icons/icon-phone.avif";
import chatIcon from "../assets/icons/icon-chat.webp";
import emailIcon from "../assets/icons/icon-email.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-col justify-center items-center  ">
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
            </div>
    </footer>
  );
}

export default Footer;
