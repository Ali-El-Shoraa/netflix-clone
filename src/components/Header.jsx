import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { CgLogOff } from "react-icons/cg";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Header() {
  const [burgerIcon, setBurgerIcon] = useState(true);
  const [scroll, setScroll] = useState();

  const location = useLocation();

  const handleMenuIcon = () => {
    setBurgerIcon(!burgerIcon);
  };

  window.addEventListener("scroll", () => {
    window.scrollY > 3 ? setScroll("scroll") : setScroll("");
  });

  window.addEventListener("resize", () => setBurgerIcon(true));

  useEffect(() => {
    setBurgerIcon(true);
  }, [location]);

  return (
    <section className={`header ${scroll}`}>
      <div className="container">
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt={logo} />
          </Link>
        </div>

        {burgerIcon ? (
          <IoMenu className="menu-icon" onClick={handleMenuIcon} />
        ) : (
          <IoClose className="menu-icon" onClick={handleMenuIcon} />
        )}

        <nav className={`navbar ${!burgerIcon ? "sidebar" : "hide"} `}>
          <ul className="links">
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            {/* <li>
              <Link to={`/tv`}>TV Shows</Link>
            </li> */}
            <li>
              <Link to={`/movie`}>Movies</Link>
            </li>
            <li>
              <Link to={`/lists`}>My Lists</Link>
            </li>
          </ul>

          <CgLogOff className="logout" onClick={() => signOut(firebaseAuth)} />
        </nav>
      </div>
    </section>
  );
}

export default Header;
