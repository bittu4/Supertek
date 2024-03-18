import { NavLink } from "react-router-dom";

const OtherProducts = () => {
  return (
    <section className="w-full max-container px-6 py-10 bg-[#f5f6f8] rounded-[40px]">
      <h5 className="font-lato font-bold text-2xl">Other Products</h5>
      <hr className="mt-5 mb-3 border-t-[1px] border-black opacity-10" />
      <nav className="flex flex-col">
        <NavLink
          key={"tiltAndTurn"}
          to={"/products/TiltAndTurn"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Tilt & Turn
        </NavLink>
        <NavLink
          key={"awning"}
          to={"/products/Awning"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Awning
        </NavLink>
        <NavLink
          key={"slidingWindows"}
          to={"/products/SlidingWindows"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Sliding Windows
        </NavLink>
        <NavLink
          key={"bifold"}
          to={"/products/Bifold"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Bifold
        </NavLink>
        <NavLink
          key={"french"}
          to={"/products/French"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          French
        </NavLink>
        <NavLink
          key={"casement"}
          to={"/products/Casement"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Casement
        </NavLink>
        <NavLink
          key={"tiltAndSlide"}
          to={"/products/TiltAndSlide"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Tilt & Slide
        </NavLink>
        <NavLink
          key={"frenchDoor"}
          to={"/products/FrenchDoor"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          French Door
        </NavLink>
        <NavLink
          key={"slidingDoor"}
          to={"/products/SlidingDoor"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Sliding Door
        </NavLink>
        <NavLink
          key={"stackerDoor"}
          to={"/products/StackerDoor"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Stacker Door
        </NavLink>
        <NavLink
          key={"liftAnSlideDoor"}
          to={"/products/LiftAndSlideDoor"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Lift & Slide Door
        </NavLink>
        <NavLink
          key={"tiltAndSlideDoor"}
          to={"/products/TiltAndSlideDoor"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Tilt & Slide Door
        </NavLink>
        <NavLink
          key={"bifoldDoor"}
          to={"/products/BifoldDoor"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Bifold Door
        </NavLink>
        <NavLink
          key={"laundryComboDoor"}
          to={"/products/LaundryComboDoor"}
          className="otherProducts font-lato text-base font-semibold mb-8"
        >
          Laundry Combo Door
        </NavLink>
      </nav>
    </section>
  );
};

export default OtherProducts;
