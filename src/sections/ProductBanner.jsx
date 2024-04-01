const ProductBanner = (props) => {
  return (
    <section className="w-full bg-productBanner bg-cover bg-center bg-no-repeat md:padding-x">
      <div className="w-full max-container">
        <div className="w-3/5 max-lg:w-4/5 max-md:w-full bg-[#0000004F]">
          <div className="bg-[#FF800080] py-20 pl-8 pr-11 max-md:py-10 max-md:px-4">
            <h2 className="font-lato font-extrabold text-4xl max-md:text-3xl text-[#fff]">
              {props.productDetails.name}
            </h2>
            <p className="font-lato font-normal text-base text-[#fff] leading-7 mt-9">
              {props.productDetails.description}
            </p>
            <a
              key={"Request Quote"}
              href={"#requestQuote"}
              className="lg:py-6 lg:px-14 py-4 px-8 lg:mt-8 mt-4 block w-fit rounded-[10px] bg-dark-orange text-white font-poppins text-lg leading-[20px] lg:font-semibold font-medium"
            >
              Claim free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
