const BenefitsProduct = (props) => {
  return (
    <section className="w-full max-container flex max-md:flex-col items-center gap-x-5">
      <div className="w-1/2 max-md:w-full max-md:mb-10">
        <h2 className="font-lato font-extrabold text-4xl text-[#2f2f2f] mb-8 max-md:text-3xl">
          BENEFITS
        </h2>
        <div>
          {props.productBenefits.map((benefits, index) => (
            <div key={index} className="flex items-center mb-5 gap-x-4">
              <img src={benefits.image} />
              <p>{benefits.label}</p>
            </div>
          ))}
        </div>
        <a
          key={"Request Quote"}
          href={"#contact"}
          className="block w-fit font-poppins font-semibold text-[#fff] text-lg bg-[#ff8000] rounded-[10px] py-6 px-12 mt-3"
        >
          Request Quote
        </a>
      </div>
      <div className="w-1/2 max-md:w-full">
        <img className="w-full" src={props.productDetails.image2} />
      </div>
    </section>
  );
};

export default BenefitsProduct;
