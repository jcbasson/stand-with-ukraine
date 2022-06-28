import { useFormContext } from "react-hook-form";

const YourDetails = () => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-lg text-[#3d65b4] mb-1 ">
        Enter Your Details
      </h2>
      <div className="flex flex-col gap-2">
        <input
          autoComplete="off"
          placeholder="First name"
          type="text"
          className="form-input input[type='text'] rounded-lg"
          {...register("firstName", { required: true })}
        />
        <input
          autoComplete="off"
          name="lastName"
          placeholder="Last name"
          type="text"
          className="form-input input[type='text'] rounded-lg"
          {...register("lastName", { required: true })}
        />
      </div>
      <input
        autoComplete="off"
        name="email"
        placeholder="Email"
        type="email"
        className="form-input input[type='email'] rounded-lg"
        {...register("senderEmail", { required: true })}
      />
    </div>
  );
};

export default YourDetails;
