const ServiceCard = ({ image, label }) => {
  return (
    <div className="py-2 px-[11px] bg-white shadow-card rounded-lg min-h-[136px] flex items-center justify-center flex-col gap-3 hover:scale-110 hover:shadow-cardHover duration-500 ease-out">
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
