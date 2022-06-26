import { useReducer } from "react";
import candidatesData from "./candidates.json";

const setCandidateEmailFlag = (candidates, area, candidateId, shouldEmail) => {
  return candidates[area].map((candidate) =>
    candidate.id === candidateId ? { ...candidate, shouldEmail } : candidate
  );
};

const selectCandidatesReducer = (state, action) => {
  switch (action.type) {
    case "selectToEmail": {
      const { area, candidateId } = action;
      return {
        ...state,
        [area]: setCandidateEmailFlag(state, area, candidateId, true),
      };
    }
    case "unselectToEmail": {
      const { area, candidateId } = action;
      return {
        ...state,
        [area]: setCandidateEmailFlag(state, area, candidateId, false),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useSelectCandidates = () => {
  const [state, dispatch] = useReducer(selectCandidatesReducer, candidatesData);

  const selectToEmail = (area, candidateId) =>
    dispatch({ type: "selectToEmail", area, candidateId });

  const unselectToEmail = (area, candidateId) =>
    dispatch({ type: "unselectToEmail", area, candidateId });

  return [state, selectToEmail, unselectToEmail];
};
