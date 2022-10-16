import { useQuery } from "react-query";
import axiosNetlify from "../../utils/axios-netlify";

const fetchMessage = async (area) => {
  const { data } = await axiosNetlify.get(`.netlify/functions/message`);
  return data;
};

export const useFetchMessage = (onSuccessHandler, onErrorHandler) => {
  return useQuery("message", fetchMessage);
};
