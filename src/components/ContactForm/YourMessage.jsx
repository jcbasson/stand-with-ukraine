import { useFormContext } from "react-hook-form";

const YourMessage = () => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-lg text-[#3d65b4] mb-1">
        Compose your email
      </h2>
      <div className="flex flex-col gap-2">
        <textarea
          autoComplete="off"
          name="subject"
          placeholder="Subject"
          type="text"
          className="form-input input[type='text'] rounded-lg "
          {...register("subject", { required: true })}
        />
        <textarea
          autoComplete="off"
          name="message"
          placeholder="Message"
          type="text"
          className="h-60 input[type='text'] rounded-lg"
          {...register("message", { required: true })}
        />
      </div>
    </div>
  );
};

export default YourMessage;
