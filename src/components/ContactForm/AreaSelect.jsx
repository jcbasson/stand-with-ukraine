import { useFormContext, useFieldArray } from "react-hook-form";

const AreaSelect = ({ onChangeHandler }) => {
  const { register } = useFormContext();
  //   const {
  //     fields: areas,
  //     update,
  //     replace,
  //   } = useFieldArray({ name: "areas" });

  const areas = ["Wentworth"];

  return (
    <select
      name="area"
      {...register("area", { required: true })}
      className="select"
      onChange={(e) => onChangeHandler(e.target.value)}
    >
      <option value="">Please select your area</option>
      {areas.map((ar) => {
        return (
          <option key={ar} value={ar.toLowerCase()}>
            {ar}
          </option>
        );
      })}
    </select>
  );
};

export default AreaSelect;
