import { Link } from "react-router-dom";
import telIcon from "../assets/icons/icon-phone.avif";
import chatIcon from "../assets/icons/icon-chat.webp";
import emailIcon from "../assets/icons/icon-email.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-col justify-center items-center  ">
        <img
          src="src/assets/images/handhold.svg"
          className=" w-fit"
          alt="Quote"
        />
        <section className="nletter">
          <div className="nletter--wrapper">
            <h3 className="nletter__title"></h3>
            <span className="nletter__promo">
             
            </span>
          
          </div>
        </section>

      <div className="footer-main bg-black text-gray-500">
        <div className="footer-sv">
          <section className="footer-sv__links--container">
            <ul className="footer-sv__links">
              <h5 className="footer-sv__link--header"></h5>
             
            </ul>
          </section>
          <section className="footer-sv__contact">
            <h4 className="footer-sv__contact-title">
              
            </h4>
            <p className="footer-sv__contact-text">
            
            </p>
            <ul className="footer-sv__contact-info">
              <li className="footer-sv__contact-tel">
                <img
                  src={telIcon}
                  alt="Telephone Icon"
                  className="footer-sv__contact-icon"
                  />
                <span className="footer-sv__contact-label">
                 
                </span>
              </li>
              <li className="footer-sv__contact-email">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="footer-sv__contact-icon"
                  />
                <span className="footer-sv__contact-label">
                
                </span>
              </li>
              <li className="footer-sv__contact-message">
                <img
                  src={chatIcon}
                  alt="Chat Icon"
                  className="footer-sv__contact-icon"
                  />
                <span className="footer-sv__contact-label"></span>
              </li>
            </ul>
          </section>
        </div>
        <ul className="footer-bottom">
          <span className="footer-bottom__link">&copy;</span>
          <Link to="/" className="footer-bottom__link">
           
          </Link>
          <Link to="/" className="footer-bottom__link">
            
          </Link>
          <Link to="/" className="footer-bottom__link">
         
          </Link>
          <Link to="/" className="footer-bottom__link">
           
          </Link>
          <Link to="/" className="footer-bottom__link">
        
          </Link>
        </ul>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
