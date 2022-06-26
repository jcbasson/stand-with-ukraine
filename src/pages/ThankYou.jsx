import UkraineHugImg from "../assets/ukraine-hug.jpeg";

const ThankYou = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg md:text-2xl lg:text-4xl  font-bold">
        Your email was sent!
      </h1>
      <h2 className="font-bold text-base text-[#3d65b4] mb-1 ">
        Thank you for standing with Ukraine
      </h2>
      <img src={UkraineHugImg} alt="Thanks" />
    </div>
  );
};

export default ThankYou;
