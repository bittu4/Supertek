import { attachmentImg } from "../assets/images";

const RequestQuote = () => {
  return (
    <section className="w-full max-container px-5 py-9 bg-[#F5F6F8] rounded-[20px]">
      <h2 className="font-lato mb-12 font-extrabold text-4xl max-sm:text-3xl max-sm:mb-8">Request Quote</h2>
      <form>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Full Name *
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="|"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Email
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="email"
              placeholder="Doe"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Phone number
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="+1 012 3456 789"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Postcode
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="243434"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Select Product
            </label>
            <select className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit">
              <option>Supertek Windows</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Project Type
            </label>
            <select className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit">
              <option>New Build</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Installation Required
            </label>
            <select className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit">
              <option>Yes</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Type of Client
            </label>
            <select className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit">
              <option>Supertek Windows</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              How did you hear about us
            </label>
            <div className="flex md:justify-between max-md:gap-x-9 mt-2">
              <div className="flex items-center">
                <input type="radio" />
                <label className="font-normal text-sm text-[#8d8d8d] ml-1">
                  Google
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" />
                <label className="font-normal text-sm text-[#8d8d8d] ml-1">
                  Referral
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" />
                <label className="font-normal text-sm text-[#8d8d8d] ml-1">
                  Instagram
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333] mb-1">
              Upload Project Details (Maximum file size limit is 10MB)
            </label>
            <div className="flex w-fit px-4 py-1 rounded-[6px] bg-[#FF800033]">
              <img width="16px" height="16px" src={attachmentImg} />
              <span className="ml-2 font-lato font-medium text-[13px] text-[#ff8000]">
                Upload
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            className="lg:py-5 lg:px-10 py-4 px-6 rounded-[10px] bg-dark-orange text-white font-poppins text-lg leading-none font-medium"
            type="submit"
          >
            Request Quote
          </button>
        </div>
      </form>
    </section>
  );
};

export default RequestQuote;
