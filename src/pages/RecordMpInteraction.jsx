import ContactForm from "../components/ContactForm";

const RecordMpInteraction = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-lg md:text-2xl lg:text-4xl mb-12 font-bold">
        Record your interaction with your local MP so far
      </h1>
      <ContactForm />
    </div>
  );
};

export default RecordMpInteraction;
