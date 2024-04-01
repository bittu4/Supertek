import { useState } from "react";
import { attachmentImg } from "../assets/images";

const RequestQuote = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postCode, setPostCode] = useState("");
  const [product, setProduct] = useState("");
  const [projectType, setProjectType] = useState("");
  const [installRequired, setInstallRequired] = useState("yes");
  const [google, setGoogle] = useState(false);
  const [referral, setReferral] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileExist, setFileExist] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = (e) => {
    if (e.target.value === "google") {
      setHearAboutUs(e.target.value);
      setGoogle(true);
      setReferral(false);
      setInstagram(false);
    }
  };

  const handleReferral = (e) => {
    if (e.target.value === "referral") {
      setHearAboutUs(e.target.value);
      setGoogle(false);
      setReferral(true);
      setInstagram(false);
    }
  };

  const handleInstagram = (e) => {
    if (e.target.value === "instagram") {
      setHearAboutUs(e.target.value);
      setGoogle(false);
      setReferral(false);
      setInstagram(true);
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

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbydHZaNhhUVqpktkVO1iSbdRx9nzn3FtvIZ5N4eWfz7V9MAhptglx8O520y4-LzzRB-/exec";
  const form = document.forms["request-quote"];

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (
      fullName === "" ||
      email === "" ||
      phone === "" ||
      postCode === "" ||
      product === "" ||
      projectType === "" ||
      installRequired === "" ||
      hearAboutUs === "" ||
      fileName === ""
    ) {
      setError("Please fill this detail!");
    } else {
      console.log({
        fullName,
        email,
        phone,
        postCode,
        product,
        projectType,
        installRequired,
        hearAboutUs,
        fileName,
      });
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          alert("Form Submitted Successfully");
          setFullName("");
          setEmail("");
          setPhone("");
          setPostCode("");
          setProduct("");
          setProjectType("");
          setInstallRequired("");
          setGoogle(false);
          setReferral(false);
          setInstagram(false);
          setHearAboutUs("");
          setFileName("");
          console.log("Success!", response);
        })
        .catch((error) => console.log("Error!", error.message));
    }
  };

  return (
    <section className="w-full max-container px-5 py-9 bg-[#F5F6F8] rounded-[20px]">
      <h2 className="font-lato mb-12 font-extrabold text-4xl max-sm:text-3xl max-sm:mb-8">
        Request Quote
      </h2>
      <form onSubmit={handleSubmission} name="request-quote">
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Full Name *
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="|"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <span className="text-xs text-red-500 font-poppins font-medium">
              {fullName === "" ? error : ""}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-xs text-red-500 font-poppins font-medium">
              {email === "" ? error : ""}
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Phone number *
            </label>
            <input
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              type="text"
              placeholder="+1 012 3456 789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span className="text-xs text-red-500 font-poppins font-medium">
              {phone === "" ? error : ""}
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
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
            <span className="text-xs text-red-500 font-poppins font-medium">
              {postCode === "" ? error : ""}
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Select Product *
            </label>
            <select
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              onChange={(e) => setProduct(e.target.value)}
              value={product}
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
            <span className="text-xs text-red-500 font-poppins font-medium">
              {product === "" ? error : ""}
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Project Type *
            </label>
            <select
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              onChange={(e) => setProjectType(e.target.value)}
              value={projectType}
            >
              <option>-- Select --</option>
              <option value="New Build">New Build</option>
              <option value="Renovation">Renovation</option>
            </select>
            <span className="text-xs text-red-500 font-poppins font-medium">
              {projectType === "" ? error : ""}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-6 gap-x-6 mb-9">
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333]">
              Installation Required *
            </label>
            <select
              className="border-b-2 border-[#8d8d8d] py-1 contactInputField bg-inherit"
              onChange={(e) => setInstallRequired(e.target.value)}
              value={installRequired}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <span className="text-xs text-red-500 font-poppins font-medium">
              {installRequired === "" ? error : ""}
            </span>
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
              {hearAboutUs === "" ? error : ""}
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="font-lato font-medium text-xs text-[#333] mb-1">
              Upload Project Details (Maximum file size limit is 10MB) *
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
              <span className="text-xs text-red-500 font-poppins font-medium">
                {fileName === "" ? error : ""}
              </span>
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
