import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MovingComponent from "react-moving-text";
import { Dropdown } from "flowbite-react";
import CartContext from "../context/CartContext";
import logo from "../assets/images/logo.svg";

function NavBarSticky(props) {
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
  const { toggleSearchView } = props;

  const [menuVisible, setMenuVisibility] = useState(false);
  const [cartItems] = useContext(CartContext);

  const toggleMenuVisibility = () => {
    setMenuVisibility(() => !menuVisible);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  useEffect(() => {
    const windowHideMenuClick = (e) => {
      if (!e.target.closest(".nav")) hideMenu();
    };

    const windowHideMenuEsc = (e) => {
      if (e.key === "Escape") hideMenu();
    };

    window.addEventListener("click", windowHideMenuClick);
    window.addEventListener("keydown", windowHideMenuEsc);

    return () => {
      window.removeEventListener("click", windowHideMenuClick);
      window.removeEventListener("keydown", windowHideMenuEsc);
    };
  }, []);

  return (
    <motion.nav
      className="nav nav--sticky  flex justify-between px-5 bg-none absolute z-10  top-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "tween" }}
    >
      <script src="../path/to/flowbite/dist/flowbite.min.js" />{" "}
      <button
        type="button"
        className="material-symbols-outlined nav__btn-menu"
        onClick={toggleMenuVisibility}
        data-testid="menu-btn"
      >
        menu
      </button>
      <Link to="/" className="nav__logo no-underline">
        <div className="gap-10 pt-10">
          <img src={logo} alt="" className="w-[15vh]" />
        </div>
      </Link>
      <ul className="nav__links text-white">
        {/* <NavLink]}
          to="/products"
          className="nav__link
          "
        >
          Stories
        </NavLink> */}

        <Dropdown label="Stories" className="bg-white" dismissOnClick={false}>
          <Dropdown.Item>
            <NavLink
              to="/products/black"
              className="nav__link
          "
            >
              Photos
            </NavLink>{" "}
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink
              to="/about"
              className="nav__link
          "
            >
              Videos
            </NavLink>{" "}
          </Dropdown.Item>
        </Dropdown>

        <NavLink
          to="/products/black"
          className="nav__link
          "
        >
          About us
        </NavLink>
        <NavLink
          to="/products/white"
          className="nav__link
          "
        >
          FAQs
        </NavLink>

        <Dropdown label="MORE" className="bg-white" dismissOnClick={false}>
          <Dropdown.Item>
            <NavLink
              to="/about"
              className="nav__link
          "
            >
              Testimonials
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink
              to="/about"
              className="nav__link
          "
            >
              Blog
            </NavLink>{" "}
          </Dropdown.Item>
        </Dropdown>
      </ul>
      <div className=" flex flex-row bg-yellow-300 h-min p-2 w-[160px] rounded text-black font-bold cursor-pointer sticky top-5">
        {/* <Link
          to="/cart"
          className="nav__btn-icon icon__shopping-bag material-symbols-outlined"
        >
          shopping_bag
          {cartItems.length > 0 && (
            <div className="cart-badge">{cartItems.length}</div>
          )}
        </Link> */}
        <span className="mr-2">GET </span>
        <div className="" key={CurrentStuff}>
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
      <AnimatePresence>
        {menuVisible && (
          <motion.nav
            className="nav-menu"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, originY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ type: "tween" }}
            data-testid="menu-dropdown"
          >
            <ul className="nav-menu__links">
              <NavLink
                to="/products"
                className="nav-menu__link
            "
              >
                Collection
              </NavLink>
              <NavLink
                to="/products/black"
                className="nav-menu__link
            "
              >
                black
              </NavLink>
              <NavLink
                to="/products/white"
                className="nav-menu__link
            "
              >
                white
              </NavLink>

              <NavLink
                to="/about"
                className="nav-menu__link
            "
              >
                About us
              </NavLink>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

NavBarSticky.propTypes = {
  toggleSearchView: PropTypes.func.isRequired,
};

export default NavBarSticky;
