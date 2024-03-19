const ProductBanner = (props) => {
  const name = props.productDetails.name;
  const descriptionPara = props.productDetails.description.split("\\\\");
  return (
    <section className="w-full bg-[url('./assets/images/French-door-banner.png')] bg-cover bg-center bg-no-repeat md:padding-x">
      <div className="w-full max-container">
        <div className="w-3/5 max-lg:w-4/5 max-md:w-full bg-[#0000004F]">
          <div className="bg-[#FF800080] py-20 pl-8 pr-11 max-md:py-10 max-md:px-4">
            <h2 className="font-lato font-extrabold text-4xl max-md:text-3xl text-[#fff]">
              {name}
            </h2>
            <p className="font-lato font-normal text-base text-[#fff] mt-9">
              {descriptionPara.map((description, index) => (
                <span key={index}>
                  {description}
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
