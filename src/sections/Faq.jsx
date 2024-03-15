import { useState } from "react";
import Accordian from "../components/Accordian";
import { allFaq } from "../constants";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="w-full max-container">
      <h3 className="sm:text-4xl text-3xl max-sm:leading-10 font-extrabold text-light-black leading-[57px]">
        FAQs
      </h3>
      <div className="max-sm:mt-12 mt-[70px]">
        <div className="shadow-faq md:p-12 p-5 rounded-[20px]">
          {allFaq.map((faq, index) => (
            <Accordian
              key={index}
              faq={faq}
              isActiveFaq={index === activeFaq}
              setActiveFaq={setActiveFaq}
              faqIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
