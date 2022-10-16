import { useFetchMessage } from "./useFetchMessage";

const YourMessage = () => {
  const { isSuccess, data: message } = useFetchMessage();
  console.log("JC message = ", message, isSuccess);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg text-[#3d65b4] mb-1">Your subject</h2>
        <div className="flex flex-col gap-2">
          <textarea
            autoComplete="off"
            name="subject"
            placeholder="Subject"
            type="text"
            className="form-input input[type='text'] rounded-lg "
            disabled
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg text-[#3d65b4] mb-1">Your message</h2>
        <textarea
          autoComplete="off"
          name="message"
          placeholder="Message"
          type="text"
          className="h-60 input[type='text'] rounded-lg"
          disabled
        />
      </div>
      <div className="flex flex  justify-center gap-2">
        <button
          type="button"
          className="bg-[#3d65b4] font-bold text-lg text-white rounded-lg h-12 w-40"
        >
          GENERATE
        </button>
        <button
          type="button"
          className="bg-[#4fe77a] font-bold text-lg text-white rounded-lg h-12 w-20"
        >
          COPY
        </button>
      </div>
    </div>
  );
};

export default YourMessage;
