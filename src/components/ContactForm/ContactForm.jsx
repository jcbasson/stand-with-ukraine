import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { ReactQueryDevtools } from "react-query/devtools";
import YourCandidates from "./YourCandidates";
import YourDetails from "./YourDetails";
import YourMessage from "./YourMessage";
import candidatesData from "./candidates.json";
import { useSendMessage } from "./useSendMessageHook";

const ContactForm = () => {
  const navigate = useNavigate();
  const formMethods = useForm({
    defaultValues: { candidates: candidatesData },
  });
  const [isSendingMessage, sendMessage] = useSendMessage(
    () => navigate("/thank-you"),
    () => navigate("/error")
  );

  const onSubmit = (data) => {
    // sendMessage(data);
    navigate("/thank-you");
  };

  if (isSendingMessage) {
    // TODO: Implement spinner
  }

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="flex flex-col gap-12"
      >
        <YourCandidates />
        <YourDetails />
        <YourMessage />
        <button
          type="submit"
          className="bg-[#3d65b4] font-bold text-lg text-white rounded-lg h-12"
        >
          Send my email
        </button>
      </form>
      <ReactQueryDevtools initialIsOpen />
    </FormProvider>
  );
};

export default ContactForm;
