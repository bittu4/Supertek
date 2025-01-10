import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ServiceCard = ({ image, label }) => {
  const [showLocation, setShowLocation] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes("/windows") ||
      location.pathname.includes("/doors")
    ) {
      setShowLocation(true);
    } else {
      setShowLocation(false);
    }
  }, [setShowLocation, location.pathname]);
  return (
    <div
      className={`${
        showLocation ? "w-[28%]" : "w-[17%]"
      } max-lg:w-[23%] max-md:w-[30%] max-sm:w-[44%] py-2 px-[11px] bg-white shadow-card rounded-lg min-h-[136px] flex items-center justify-center flex-col gap-3 hover:scale-110 hover:shadow-cardHover duration-500 ease-out`}
    >
      <img
        src={image}
        width={48}
        height={48}
        className="object-contain"
        alt={label}
      />
      <p className=" text-[#464747] text-base font-semibold text-center">
        {label}
      </p>
    </div>
  );
};

export default ServiceCard;
