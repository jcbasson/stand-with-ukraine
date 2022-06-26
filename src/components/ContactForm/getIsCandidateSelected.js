export const getIsCandidateSelected = (candidates) => {
  if (candidates) {
    const selected = Object.values(candidates)
      .flatMap((c) => c)
      .filter((candidate) => candidate.shouldEmail);

    return selected.length > 0;
  }
  return false;
};
