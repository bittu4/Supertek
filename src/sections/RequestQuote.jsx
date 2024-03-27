/* eslint-disable no-unused-vars */
import { useState } from "react";
import { attachmentImg } from "../assets/images";
import validator from "validator";

const RequestQuote = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [postCode, setPostCode] = useState("");
  const [postCodeError, setPostCodeError] = useState(null);
  const [product, setProduct] = useState("");
  const [projectType, setProjectType] = useState("");
  const [installRequired, setInstallRequired] = useState("");
  const [fileName, setFileName] = useState(null);
  const [fileExist, setFileExist] = useState(false);

  const validateFullName = (e) => {
    setFullName(e.target.value);
    if (fullName === "") {
      setFullName("Enter valid Fullname!");
    } else {
      setFullName(null);
    }
  };

  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const validatePhone = (e) => {
    setPhone(e.target.value);

    if (validator.isMobilePhone(phone)) {
      setPhoneError("");
    } else {
      setPhoneError("Enter your valid Phone Number!");
    }
  };

  const handlePostCode = (e) => {
    setPostCode(e.target.value);
    if (postCode === "") {
      setPostCodeError("Enter valid Postcode!");
    } else {
      setPostCodeError(null);
    }
  };

  const handleFile = (e) => {
    setFileName(e.target.files[0].name);
    setFileExist(true);
  };

  const handleRemoveFile = () => {
    setFileName(null);
    setFileExist(false);
  };

  return (
    <section className="w-full max-container px-5 py-9 bg-[#F5F6F8] rounded-[20px]">
      <h2 className="font-lato mb-12 font-extrabold text-4xl max-sm:text-3xl max-sm:mb-8">
        Request Quote
      </h2>
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
              onChange={(e) => validateFullName(e)}
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
              onChange={(e) => validateEmail(e)}
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
              onChange={(e) => validatePhone(e)}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Postcode
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="243434"
              onChange={(e) => handlePostCode(e)}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Select Product
            </label>
            <select
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              onChange={(e) => setProduct(e.target.value)}
            >
              <option>-- Select --</option>
              <option value="Tilt And Turn">Tilt And Turn</option>
              <option value="Awning">Awning</option>
              <option value="Sliding Windows">Sliding Windows</option>
              <option value="Bifold">Bifold</option>
              <option value="French">French</option>
              <option value="Casement">Casement</option>
              <option value="Tilt And Slide">Tilt And Slide</option>
              <option value="French Door">French Door</option>
              <option value="Sliding Door">Sliding Door</option>
              <option value="Stacker Door">Stacker Door</option>
              <option value="Lift And Slide Door">Lift And Slide Door</option>
              <option value="Tilt And Slide Door">Tilt And Slide Door</option>
              <option value="Bifold Door">Bifold Door</option>
              <option value="Laundry Combo Door">Laundry Combo Door</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Project Type
            </label>
            <select
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option>-- Select --</option>
              <option value="New Build">New Build</option>
              <option value="Renovation">Renovation</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Installation Required
            </label>
            <select
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              onChange={(e) => setInstallRequired(e.target.value)}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              How did you hear about us
            </label>
            <div className="flex md:justify-between max-md:gap-x-4 mt-2">
              <div className="flex items-center requestQuoteInput">
                <input type="radio" name="radio" />
                <span></span>
                <label className="font-normal text-sm text-[#8d8d8d] ml-1">
                  Google
                </label>
              </div>
              <div className="flex items-center requestQuoteInput">
                <input type="radio" name="radio" />
                <span></span>
                <label className="font-normal text-sm text-[#8d8d8d] ml-1">
                  Referral
                </label>
              </div>
              <div className="flex items-center requestQuoteInput">
                <input type="radio" name="radio" />
                <span></span>
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
            <div>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={(e) => handleFile(e)}
              />
              <div
                className="flex w-fit px-4 py-1 rounded-[6px] bg-[#FF800033]"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <img width="16px" height="16px" src={attachmentImg} />
                <span className="ml-2 font-lato font-medium text-[13px] text-[#ff8000]">
                  Upload
                </span>
              </div>
              <label className="font-lato font-medium text-sm text-pretty">
                {fileName}
              </label>
              {fileExist && (
                <p
                  className="font-lato inline-block pr-1 pl-1 pt-[1px] font-semibold rounded-full bg-dark-orange text-xs text-white w-[18px] h-[18px] ml-2 cursor-pointer text-center"
                  onClick={handleRemoveFile}
                >
                  X
                </p>
              )}
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
