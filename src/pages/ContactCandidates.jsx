import ContactForm from "../components/ContactForm";

const ContactCandidates = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-lg md:text-2xl lg:text-4xl mb-12 font-bold">
        Email your local election candidates
      </h1>
      <ContactForm />
    </div>
  );
};

export default ContactCandidates;
