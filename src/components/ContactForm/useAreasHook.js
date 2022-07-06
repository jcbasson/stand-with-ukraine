import { useQuery } from "react-query";
import axiosNetlify from "../../utils/axios-netlify";

const fetchAreas = async (area) => {
  const { data } = await axiosNetlify.get(`.netlify/functions/areas`);
  return data;
};

export const useAreas = (onSuccessHandler, onErrorHandler) => {
  return useQuery("areas", fetchAreas);
};
