import { NavLink } from "react-router-dom";
import { otherProductsList } from "../constants";

const OtherProducts = () => {
  return (
    <section className="w-full max-container px-6 py-10 bg-[#f5f6f8] rounded-[40px]">
      <h5 className="font-lato font-bold text-2xl">Other Products</h5>
      <hr className="mt-5 mb-3 border-t-[1px] border-black opacity-10" />
      <nav className="flex flex-col">
        {otherProductsList.map((productList) => (
          <NavLink
            key={productList.name}
            to={productList.to}
            className="otherProducts font-lato text-base font-semibold mb-8"
          >
            {productList.name}
          </NavLink>
        ))}
      </nav>
    </section>
  );
};

export default OtherProducts;
