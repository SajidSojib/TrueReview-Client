import React from "react";
import Lottie from "lottie-react";
import faqLottie from "../../assets/faq-lottie.json";
const Faq = ({ questions }) => {
  console.log(questions);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-2xl ">
      <h1 className="text-4xl mt-12 mb-12 font-bold text-center text-base-300">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between">
        <div data-aos="fade-right" data-aos-once="true" data-aos-duration="500" className="flex-7/12">
          <Lottie animationData={faqLottie} loop={true} />
        </div>
        <div className="space-y-3">
          {questions?.map((q) => (
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              data-aos-duration={ q.id * 200}
              key={q.id}
              className="collapse collapse-arrow bg-info"
            >
              {q.id == 1 ? (
                <input type="radio" name="my-accordion-2" defaultChecked />
              ) : (
                <input type="radio" name="my-accordion-2" />
              )}
              <div className="collapse-title text-base-300 text-lg font-semibold">
                {q.question}
              </div>
              <div className="collapse-content text-[#9898a5] text-base">
                {q.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
