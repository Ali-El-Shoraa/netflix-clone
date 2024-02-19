import "./App.scss";
import { Routes, Route } from "react-router-dom";
// import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Header from "./components/Header";
import Details from "./pages/Details";
import Movies from "./pages/Movies";
import MyLists from "./pages/MyLists";
// import { onAuthStateChanged } from "firebase/auth";
// import { firebaseAuth } from "./utils/firebase-config";

function App() {
  // const navigate = useNavigate();

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (!currentUser) navigate("/signup");
  // });
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/lists" element={<MyLists />} />
      </Routes>
    </>
  );
}

export default App;
