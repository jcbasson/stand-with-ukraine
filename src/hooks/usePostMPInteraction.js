import { useMutation } from "@tanstack/react-query";
import { post } from "../api/requests";

export const usePostMPInteraction = () => {
  const { isSuccess, isPending, mutate, isError } = useMutation({
    mutationFn: ({ mpName, hasResponded, hasMetWith, standsWithUkraine }) => {
      return post(`mp-interaction-data`, {
        mpName,
        hasResponded,
        hasMetWith,
        standsWithUkraine,
      });
    },
  });

  return {
    isSuccess,
    isError,
    isPending,
    postMPInteraction: mutate,
  };
};
