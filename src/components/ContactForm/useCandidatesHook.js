import { useMutation } from "react-query";
import axiosNetlify from "../../utils/axios-netlify";

const fetchCandidates = async (area) => {
  const { data } = await axiosNetlify.get(`.netlify/functions/candidates`, {
    params: { area },
  });
  return data;
};

export const useCandidates = (onSuccessHandler, onErrorHandler) => {
  const { isLoading, mutate } = useMutation(fetchCandidates, {
    onSuccess: (res) => {
      console.log("onSuccess res = ", res);
      onSuccessHandler(res);
    },
    onError: (err) => {
      console.log("onError err = ", err);
      onErrorHandler(err.response?.data || err);
    },
  });
  return [mutate, isLoading];
};
