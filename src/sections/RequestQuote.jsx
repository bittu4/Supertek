import { useState } from "react";
import { attachmentImg, loader } from "../assets/images";

const RequestQuote = () => {
  const [google, setGoogle] = useState(false);
  const [referral, setReferral] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    postCode: "",
    product: "",
    projectType: "",
    installRequired: "",
    radio: "",
  });

  const handleGoogle = (e) => {
    if (e.target.value === "google") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setGoogle(true);
      setReferral(false);
      setInstagram(false);
    }
  };

  const handleReferral = (e) => {
    if (e.target.value === "referral") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setGoogle(false);
      setReferral(true);
      setInstagram(false);
    }
  };

  const handleInstagram = (e) => {
    if (e.target.value === "instagram") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setGoogle(false);
      setReferral(false);
      setInstagram(true);
    }
  };

  const handleFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbywUH7f5A4afkani7xwqcAa7OE3rXT1gbqSzKVvBgoupQW-ApwcW5CjbiWh3nAhhZD9/exec";

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.postCode === "" ||
      formData.radio === ""
    ) {
      setError("Please fill this detail!");
    } else {
      setSubmit(true);
      let fileData = null;

      if (fileName) {
        fileData = await toBase64(fileName);
      }

      const payload = {
        formData,
        fileName: fileName?.name,
        mimeType: fileName?.type,
        fileData,
      };

      const response = await fetch(scriptURL, {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log(result);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        postCode: "",
        product: "",
        projectType: "",
        installRequired: "",
        radio: "",
      });
      setGoogle(false);
      setReferral(false);
      setInstagram(false);
      setFileName(null);
      setError("");
      alert("Form Submitted Successfully");
      setSubmit(false);
    }
  };

  const toBase64 = (fileName) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileName);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  return (
    <section className="w-full max-container px-5 py-9 bg-[#F5F6F8] rounded-[20px]">
      <h2 className="font-lato mb-12 font-extrabold text-4xl max-sm:text-3xl max-sm:mb-8 text-center">
        Request Quote
      </h2>
      <form method="post" onSubmit={handleSubmission} name="request-quote">
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Full Name *
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="|"
              name="fullName"
              value={formData.fullName}
              onChange={changeHandler}
            />
            <span className="text-xs text-red-500 font-poppins font-medium">
              {formData.fullName === "" ? error : ""}
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Email *
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="email"
              placeholder="Doe"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
            <span className="text-xs text-red-500 font-poppins font-medium">
              {formData.email === "" ? error : ""}
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Phone Number *
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="+1 012 3456 789"
              name="phone"
              value={formData.phone}
              onChange={changeHandler}
            />
            <span className="text-xs text-red-500 font-poppins font-medium">
              {formData.phone === "" ? error : ""}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Postcode *
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="243434"
              name="postCode"
              value={formData.postCode}
              onChange={changeHandler}
            />
            <span className="text-xs text-red-500 font-poppins font-medium">
              {formData.postCode === "" ? error : ""}
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Select Product
            </label>
            <select
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              onChange={changeHandler}
              name="product"
              value={formData.product}
            >
              <option value="">-- Select --</option>
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
              onChange={changeHandler}
              name="projectType"
              value={formData.projectType}
            >
              <option value="">-- Select --</option>
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
              onChange={changeHandler}
              name="installRequired"
              value={formData.installRequired}
            >
              <option value="">-- Select --</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              How did you hear about us *
            </label>
            <div className="flex md:justify-between max-md:gap-x-4 mt-2">
              <div className="flex items-center requestQuoteInput">
                <input
                  type="radio"
                  value="google"
                  name="radio"
                  checked={google}
                  onChange={(e) => handleGoogle(e)}
                />
                <span></span>
                <label className="font-normal text-sm text-[#8d8d8d] ml-1">
                  Google
                </label>
              </div>
              <div className="flex items-center requestQuoteInput">
                <input
                  type="radio"
                  value="referral"
                  name="radio"
                  checked={referral}
                  onChange={(e) => handleReferral(e)}
                />
                <span></span>
                <label className="font-normal text-sm text-[#8d8d8d] ml-1">
                  Referral
                </label>
              </div>
              <div className="flex items-center requestQuoteInput">
                <input
                  type="radio"
                  value="instagram"
                  name="radio"
                  checked={instagram}
                  onChange={(e) => handleInstagram(e)}
                />
                <span></span>
                <label className="font-normal text-sm text-[#8d8d8d] ml-1">
                  Instagram
                </label>
              </div>
            </div>
            <span className="text-xs text-red-500 font-poppins font-medium">
              {formData.radio === "" ? error : ""}
            </span>
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
                name="file"
                onChange={(e) => handleFile(e)}
              />
              <div
                className="cursor-pointer flex w-fit px-4 py-1 rounded-[6px] bg-[#FF800033]"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <img width="16px" height="16px" src={attachmentImg} />
                <span className="ml-2 font-lato font-medium text-[13px] text-[#ff8000]">
                  Upload
                </span>
              </div>
              <label className="font-lato font-medium text-sm text-pretty">
                {fileName?.name}
              </label>
            </div>
          </div>
        </div>
        <div>
          <button
            className="lg:py-5 lg:px-10 py-4 px-6 rounded-[10px] bg-dark-orange text-white font-poppins text-lg leading-none font-medium"
            type="submit"
            name="submit"
          >
            Request Quote
          </button>
          {submit ? (
            <span className="ml-3 inline-block align-middle">
              <img src={loader} alt="loading gif" />
            </span>
          ) : null}
        </div>
      </form>
    </section>
  );
};

export default RequestQuote;
