import { useEffect, useState } from "react";
import backgroundImage1 from "../assets/cover.jpg";
import backgroundImage2 from "../assets/cover2.jpg";
import ParanormalLogo from "../assets/logo-paranormal.png";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

function Nelflix() {
  const [resize, setResize] = useState(backgroundImage1);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const checkResize = () => {
    if (window.innerWidth > "599") {
      return setResize(backgroundImage1);
    } else {
      return setResize(backgroundImage2);
    }
  };

  window.addEventListener("resize", checkResize);

  useEffect(() => {
    checkResize();

    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="nelflix">
        <img src={resize} alt="background" className="background-image" />
        <div className="layout"></div>

        <div className="container">
          <div className="text">
            <img src={ParanormalLogo} alt="Movie Cover" />
            <div className="title">Paranormal</div>
            <p className="info">
              After a skeptical hematologist is plunged into a series of inexplicable events, he
              unwillingly becomes the go-to-guy for paranormal investigations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nelflix;
