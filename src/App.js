import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarPage from "./layout/NavbarPage";
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import FooterPage from "./layout/FooterPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarPage/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
