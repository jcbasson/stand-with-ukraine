const GenerateMessage = () => {
  return (
    <div className="flex flex-col flex- ">
      <h1 className="text-lg md:text-2xl lg:text-4xl mb-12 font-bold">
        Generate your message for your local election candidates
      </h1>
      <textarea
        class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        id="message"
        rows="3"
        placeholder=""
      ></textarea>
    </div>
  );
};

export default GenerateMessage;
