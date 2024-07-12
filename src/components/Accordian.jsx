import { downArrowIcon, upArrowIcon } from "../assets/icons";

const Accordian = ({ faq, isActiveFaq, setActiveFaq, faqIndex }) => {
  const toggleFaq = () => {
    const nextFaq = isActiveFaq ? null : faqIndex;
    setActiveFaq(nextFaq);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between gap-2 py-5 cursor-pointer"
        onClick={toggleFaq}
      >
        <h3 className="text-[#2F2F2F] sm:text-xl text-base max-sm:leading-[24px] max-xl:leading-[32px] font-semibold font-poppins">
          {faq.title}
        </h3>
        <img
          src={isActiveFaq ? upArrowIcon : downArrowIcon}
          alt="Arrow Icons"
          width={24}
          height={24}
          className="object-contain max-sm:w-4 max-sm:h-4"
        />
      </div>
      {isActiveFaq && (
        <div className="transition duration-1000 ease">
          <div className="sm:text-base text-sm sm:leading-[34px] leading-6">
            {faq.content}
          </div>
          <div className="sm:text-base text-sm sm:leading-[34px] leading-6">
            <p>{faq?.pointOne}</p>
            <p>{faq?.pointTwo}</p>
            <p>{faq?.pointThree}</p>
            <p>{faq?.pointFour}</p>
            <p>{faq?.pointFive}</p>
            <p>{faq?.pointSix}</p>
            <p>{faq?.pointSeven}</p>
            <p>{faq?.pointEight}</p>
          </div>
          <hr className="my-6" />
        </div>
      )}
    </div>
  );
};

export default Accordian;
