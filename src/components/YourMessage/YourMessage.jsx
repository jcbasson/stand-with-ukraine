import { useFetchMessage } from "./useFetchMessage";

const YourMessage = () => {
  const [fetchMessage, message, isSuccess] = useFetchMessage();
  const copyToClipboard = () => {
    /* Select text area by id*/
    const text = document.getElementById("your-message");

    /* Select the text inside text area. */
    text.select();

    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(text.value);
  };
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-4 h-full">
        <h2 className="font-bold text-lg text-[#3d65b4] mb-1">Your message</h2>
        <textarea
          id="your-message"
          autoComplete="off"
          name="message"
          placeholder="Message"
          type="text"
          className="h-full input[type='text'] rounded-lg text-left"
          disabled
          value={isSuccess ? message.content : ""}
        />
      </div>
      <div className="flex flex  justify-center gap-2">
        <button
          type="button"
          className="bg-[#3d65b4] font-bold text-lg text-white rounded-lg h-12 w-40"
          onClick={() => fetchMessage()}
        >
          GENERATE
        </button>
        <button
          type="button"
          className="bg-[#4fe77a] font-bold text-lg text-white rounded-lg h-12 w-20 text"
          disabled={!isSuccess}
          onClick={() => {
            copyToClipboard();
          }}
        >
          COPY
        </button>
      </div>
    </div>
  );
};

export default YourMessage;
