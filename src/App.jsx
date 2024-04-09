import Nav from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { useEffect } from "react";

function App() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/windows/TiltAndTurn" element={<TiltAndTurn />} />
          <Route path="/windows/Awning" element={<Awning />} />
          <Route path="/windows/SlidingWindows" element={<SlidingWindows />} />
          <Route path="/windows/Bifold" element={<Bifold />} />
          <Route path="/windows/French" element={<French />} />
          <Route path="/windows/Casement" element={<Casement />} />
          <Route path="/windows/TiltAndSlide" element={<TiltAndSlide />} />
          <Route path="/doors/FrenchDoor" element={<FrenchDoor />} />
          <Route path="/doors/SlidingDoor" element={<SlidingDoor />} />
          <Route path="/doors/StackerDoor" element={<StackerDoor />} />
          <Route
            path="/doors/LiftAndSlideDoor"
            element={<LiftAndSlideDoor />}
          />
          <Route
            path="/doors/TiltAndSlideDoor"
            element={<TiltAndSlideDoor />}
          />
          <Route path="/doors/BifoldDoor" element={<BifoldDoor />} />
          <Route
            path="/doors/LaundryComboDoor"
            element={<LaundryComboDoor />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
