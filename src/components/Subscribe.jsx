const Subscribe = () => {
  return (
    <form onSubmit={() => {}} className="flex items-center max-sm:flex-col sm:bg-white sm:rounded-full max-w-lg mt-2">
      <input
        type="email"
        className=" flex-1 py-4 pl-6 pr-1 rounded-full outline-none bg-white max-sm:w-full"
        placeholder="Your email address"
      />
      <button
        type="submit"
        className="text-sm font-bold py-5 px-10 bg-dark-orange rounded-full text-white max-sm:w-full max-sm:mt-3"
      >
        Subscribe
      </button>
    </form>
  );
};

export default Subscribe;
