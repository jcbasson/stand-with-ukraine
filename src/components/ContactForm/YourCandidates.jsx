import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import CandidateCard from "./CandidateCard";
import { getIsCandidateSelected } from "./getIsCandidateSelected";

const YourCandidates = () => {
  const [area, setArea] = useState();
  const { register } = useFormContext();
  const { fields: candidates, update } = useFieldArray({ name: "candidates" });

  const areas = candidates.reduce((accum, candidate) => {
    const { area } = candidate;
    return accum.includes(area) ? accum : [...accum, area];
  }, []);

  const isCandidateSelected = getIsCandidateSelected(candidates);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-lg text-[#3d65b4] mb-1 ">
        Find your local candidates
      </h2>
      <select
        name="area"
        {...register("area", { required: true })}
        className="select"
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="">Please select your area</option>
        {areas.map((ar) => {
          return (
            <option key={ar} value={ar}>
              {ar}
            </option>
          );
        })}
      </select>
      {area && (
        <div className="bg-white flex flex-col rounded-xl pr-4 pl-4 pt-4 pb-4">
          <label className="text-lg text-[#84896c] mb-2">
            To the following candidates:
          </label>
          <ul>
            {candidates.map((candidate, index) => {
              const onSelectDeselect = () => {
                update(index, {
                  ...candidate,
                  shouldEmail: !candidate.shouldEmail,
                });
              };
              return (
                <li
                  key={candidate.id}
                  className="pt-10 pb-2 border-b border-[#e3e3df]"
                >
                  <CandidateCard
                    index={index}
                    {...candidate}
                    onSelectDeselect={onSelectDeselect}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {area && !isCandidateSelected && (
        <p className="text-red-500 text-sm">
          Please select at least one candidate to email.
        </p>
      )}
    </div>
  );
};

export default YourCandidates;
