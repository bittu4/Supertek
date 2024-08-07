import { NavLink } from "react-router-dom";
import { doorProductList, windowProductList } from "../constants";

const OurProducts = () => {
  return (
    <section className="max-container lg:-mb-4">
      <h3 className="font-extrabold sm:text-4xl text-3xl max-sm:leading-10 text-black text-center">
        Our Premium Products
      </h3>
      <div className="flex justify-around max-sm:grid max-sm:grid-cols-1">
        <div>
          <h4 className="font-bold sm:text-3xl text-2xl max-sm:leading-10 pt-8 mb-4">
            Supertek Windows
          </h4>
          {windowProductList.map((windows, index) => (
            <li className="text-xl leading-7 hover:text-dark-orange hover:font-semibold" key={index} {...windows}>
              <NavLink to={windows.to}>{windows.window}</NavLink>
            </li>
          ))}
        </div>
        <div>
          <h4 className="font-bold sm:text-3xl text-2xl max-sm:leading-10 pt-8 mb-4">
            Supertek Doors
          </h4>
          {doorProductList.map((doors, index) => (
            <li className="text-xl leading-7 hover:text-dark-orange hover:font-semibold" key={index} {...doors}>
              <NavLink to={doors.to}>{doors.door}</NavLink>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
