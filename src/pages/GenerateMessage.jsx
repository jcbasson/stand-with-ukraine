import YourMessage from "../components/YourMessage";
const GenerateMessage = () => {
  return (
    <div className="flex flex-col flex- ">
      <h1 className="text-lg md:text-2xl lg:text-4xl mb-6 font-bold">
        Generate your message for your local election candidates
      </h1>
      <YourMessage />
    </div>
  );
};

export default GenerateMessage;
