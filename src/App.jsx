import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import {
  Awning,
  Bifold,
  BifoldDoor,
  Casement,
  French,
  FrenchDoor,
  Home,
  LaundryComboDoor,
  LiftAndSlideDoor,
  Products,
  SlidingDoor,
  SlidingWindows,
  StackerDoor,
  TiltAndSlide,
  TiltAndSlideDoor,
  TiltAndTurn,
} from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/TiltAndTurn" element={<TiltAndTurn />} />
          <Route path="/products/Awning" element={<Awning />} />
          <Route path="/products/SlidingWindows" element={<SlidingWindows />} />
          <Route path="/products/Bifold" element={<Bifold />} />
          <Route path="/products/French" element={<French />} />
          <Route path="/products/Casement" element={<Casement />} />
          <Route path="/products/TiltAndSlide" element={<TiltAndSlide />} />
          <Route path="/products/FrenchDoor" element={<FrenchDoor />} />
          <Route path="/products/SlidingDoor" element={<SlidingDoor />} />
          <Route path="/products/StackerDoor" element={<StackerDoor />} />
          <Route
            path="/products/LiftAndSlideDoor"
            element={<LiftAndSlideDoor />}
          />
          <Route
            path="/products/TiltAndSlideDoor"
            element={<TiltAndSlideDoor />}
          />
          <Route path="/products/BifoldDoor" element={<BifoldDoor />} />
          <Route
            path="/products/LaundryComboDoor"
            element={<LaundryComboDoor />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
