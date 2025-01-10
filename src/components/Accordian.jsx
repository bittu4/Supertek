import { downArrowIcon, upArrowIcon } from "../assets/icons";

const Accordian = ({ faq, isActiveFaq, setActiveFaq, faqIndex }) => {
  const toggleFaq = () => {
    const nextFaq = isActiveFaq ? null : faqIndex;
    setActiveFaq(nextFaq);
  };

  const FAQContent = ({ faq }) => {
    return (
      <>
        <div
          className="sm:text-base text-sm sm:leading-[34px] leading-6"
          dangerouslySetInnerHTML={{ __html: faq?.content }}
        />
        <div className="sm:text-base text-sm sm:leading-[34px] leading-6">
          <p dangerouslySetInnerHTML={{ __html: faq?.pointOne }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointTwo }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointThree }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointFour }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointFive }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointSix }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointSeven }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointEight }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointNine }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointTen }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointEleven }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointTwelve }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointThirteen }} />
          <p dangerouslySetInnerHTML={{ __html: faq?.pointFourteen }} />
        </div>
        <hr className="my-6" />
      </>
    );
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
          <FAQContent faq={faq} />
        </div>
      )}
    </div>
  );
};

export default Accordian;
