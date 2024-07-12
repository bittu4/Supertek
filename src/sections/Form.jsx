import { motion } from "framer-motion";
import { useState } from "react";
import { loader } from "../assets/images";
import { isEmail } from "validator";

const Form = () => {
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
  });
  const [check, setCheck] = useState(false);
  // const [submit, setSubmit] = useState(false);
  const [checkboxStatus, setCheckboxStatus] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [phoneErr, setPhoneErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const checkboxHandler = (e) => {
    if (e.target.checked) {
      setCheck(true);
      setCheckboxStatus(false);
    } else {
      setCheck(false);
      setCheckboxStatus(true);
    }
  };

  const changeHandler = (e) => {
    // setChecked(!checked);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxytPQ3loY3byio3gNzyjaLGh1o8tbr2jqBTREPWy17tO2KZ5hHLhH_88cfkNs1bNvRWA/exec";
  const form = document.forms["contact-us"];

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isNaN(formState.phoneNumber)) {
      setPhoneErr("Please enter valid number");
    } 
    else if (!isEmail(formState.email)) {
      setEmailErr("Please enter valid email");
      setPhoneErr("");
    } 
    else {
      setPhoneErr("");
      setEmailErr("");
      setCheckboxStatus(true);
      setSubmit(true);
      console.log(formState);
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          setCheck(false);
          setFormState({
            email: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            message: "",
          });
          alert("Form Submitted Successfully!");
          setSubmit(false);
          setPhoneErr("");
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    }
  };

  return (
    <section className="max-container w-full grid grid-cols-2 max-md:grid-cols-1 items-center gap-10 py-8">
      <motion.div
        initial="initial"
        whileInView="animate"
        className="flex flex-col"
      >
        <h3 className="sm:text-4xl text-3xl text-dark-orange max-sm:leading-10 font-extrabold max-md:text-center leading-[71px] lg:pr-10">
          Claim Your Free Measure and Quote.
        </h3>
        <p className="text-[#696969] text-base leading-[31px] mt-5 max-md:text-center">
          Claim your free measures and quote to discover how to add value to
          your home by slashing your energy bills, reducing outside noise &
          protecting from harsh weather.
        </p>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        className="text-black text-sm font-normal font-poppins"
      >
        <form onSubmit={submitHandler} name="contact-us">
          <div className="grid grid-cols-2 gap-x-4 mb-9">
            <div className="flex flex-col gap-y-3">
              <label className="">
                First name{" "}
                <span className="text-red-600 text-lg pl-1 relative">*</span>
              </label>
              <input
                className="border-b-2 border-black py-1 contactInputField"
                type="text"
                name="firstName"
                placeholder="John"
                onChange={changeHandler}
                value={formState.firstName || ""}
                required
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label>Last name</label>
              <input
                className="border-b-2 border-black py-1 contactInputField"
                type="text"
                name="lastName"
                placeholder="Doe"
                onChange={changeHandler}
                value={formState.lastName || ""}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 mb-9">
            <div className="flex flex-col gap-y-3">
              <label>
                Email{" "}
                <span className="text-red-600 text-lg pl-1 relative">*</span>
              </label>
              <input
                className="border-b-2 border-black py-1 contactInputField"
                type="text"
                name="email"
                placeholder="John@gmail.com"
                onChange={changeHandler}
                value={formState.email || ""}
                required
              />
              <span className="text-xs text-red-500 font-poppins font-medium">
                {emailErr}
              </span>
            </div>
            <div className="flex flex-col gap-y-3">
              <label>
                Phone number{" "}
                <span className="text-red-600 text-lg pl-1 relative">*</span>
              </label>
              <input
                className="border-b-2 border-black py-1 contactInputField"
                type="text"
                name="phoneNumber"
                placeholder="+61 - "
                onChange={changeHandler}
                value={formState.phoneNumber || ""}
                required
              />
              <span className="text-xs text-red-500 font-poppins font-medium">
                {phoneErr}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 mb-9">
            <div className="flex flex-col gap-y-3">
              <label>Message</label>
              <textarea
                className="border-b-2 border-black contactInputField"
                type="text"
                name="message"
                placeholder="e.g."
                onChange={changeHandler}
                value={formState.message || ""}
              />
            </div>
          </div>
          <div className="flex gap-x-2 mb-9">
            <input
              type="checkbox"
              name="checkbox"
              checked={check}
              onChange={checkboxHandler}
            />
            <label>I have filled the required details</label>
          </div>
          <div>
            <button
              className={
                checkboxStatus
                  ? "lg:py-5 lg:px-10 py-4 px-6 rounded-[10px] bg-light-grey text-light-black cursor-not-allowed font-poppins text-lg leading-none font-medium"
                  : "lg:py-5 lg:px-10 py-4 px-6 rounded-[10px] bg-dark-orange text-white font-poppins text-lg leading-none font-medium"
              }
              type="submit"
              value="Send Email"
              disabled={checkboxStatus}
            >
              Submit
            </button>
            {submit ? (
              <span className="ml-3 inline-block align-middle">
                <img src={loader} alt="loading gif" />
              </span>
            ) : null}
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Form;
