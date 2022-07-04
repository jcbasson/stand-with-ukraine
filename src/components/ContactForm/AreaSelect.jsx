import { useFormContext } from "react-hook-form";
import { useAreas } from "./useAreasHook";

const AreaSelect = ({ onChangeHandler }) => {
  const { register } = useFormContext();
  const { isSuccess, data: areas } = useAreas();

  return (
    isSuccess && (
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
    )
  );
};

export default AreaSelect;
