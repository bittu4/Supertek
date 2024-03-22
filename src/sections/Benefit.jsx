import { whyChoose } from "../constants";

const Benefit = () => {
  return (
    <div className="padding lg:-mt-16 lg:-mb-8">
      <h3 className="sm:text-4xl font-extrabold text-black leading-[71px] w-full text-center text-3xl max-sm:leading-10">
        Why Choose Supertek Windows?
      </h3>
      <p className="text-[#696969] mb-14 text-center text-lg leading-[31px] mt-10">
        Supertek Windows is a leading uPVC windows and doors manufacturer in
        Australia that aims to provide advanced technology solutions to its
        customers. We offer bespoke double glazing services for windows and
        doors, utilizing German expertise and the world&apos;s most
        sophisticated uPVC profile systems. Our team comprises experts with
        extensive local knowledge and industry experience, who are dedicated to
        making outstanding window and door systems accessible to all
        Australians. We take pride in our project management and field service
        experience, which enables us to deliver personalized services for your
        home renovation or new construction projects. At Supertek Windows, we
        tailor global ideas and systems to suit the Australian environment and
        market. Our objective is to ensure that our customers have access to the
        best quality window and door systems that are tailored to their specific
        needs.
      </p>
      <div className="padding-x max-md:px-0 flex font-poppins">
        <div className="w-3/5 max-md:w-1/2 flex flex-col md:gap-y-3 sm:gap-y-2.5 max-sm:gap-y-[18px]">
          <h4 className="lg:text-2xl md:text-xl max-sm:text-xs font-extrabold max-sm:font-bold">
            Features
          </h4>
          {whyChoose.map((features, index) => (
            <p
              className="lg:text-lg md:text-lg max-sm:text-[11px] font-medium text-dark-orange"
              key={index}
              {...features}
            >
              {features.feature}
            </p>
          ))}
        </div>
        <div className="w-2/5 max-md:w-1/2 flex justify-between">
          <div className="flex flex-col items-center gap-y-2">
            <h4 className="lg:text-2xl md:text-xl max-sm:text-xs font-extrabold max-sm:font-bold">
              uPVC
            </h4>
            {whyChoose.map((features, index) => (
              <img width={26} height={26} key={index} src={features.upvc} />
            ))}
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <h4 className="lg:text-2xl md:text-xl max-sm:text-xs font-extrabold max-sm:font-bold">
              Timber
            </h4>
            {whyChoose.map((features, index) => (
              <img width={26} height={26} key={index} src={features.timber} />
            ))}
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <h4 className="lg:text-2xl md:text-xl max-sm:text-xs font-extrabold max-sm:font-bold">
              Aluminium
            </h4>
            {whyChoose.map((features, index) => (
              <img
                width={26}
                height={26}
                key={index}
                src={features.aluminium}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
