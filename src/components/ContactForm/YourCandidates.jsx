import { useFieldArray } from "react-hook-form";
import CandidateCard from "./CandidateCard";
import AreaSelect from "./AreaSelect";
import { getIsCandidateSelected } from "./getIsCandidateSelected";
import { useCandidates } from "./useCandidatesHook";

const YourCandidates = () => {
  const {
    fields: candidates,
    update,
    replace,
  } = useFieldArray({ name: "candidates" });
  const [fetchCandidates] = useCandidates((candidates) => {
    replace(candidates);
  });
  const isCandidateSelected = getIsCandidateSelected(candidates);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-lg text-[#3d65b4] mb-1 ">
        Find your local candidates
      </h2>
      <AreaSelect onChangeHandler={fetchCandidates} />
      {candidates && candidates.length > 0 && (
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
      {candidates && candidates.length > 0 && !isCandidateSelected && (
        <p className="text-red-500 text-sm">
          Please select at least one candidate to email.
        </p>
      )}
    </div>
  );
};

export default YourCandidates;
