import { useQuery } from "@tanstack/react-query";
import { get } from "../api/requests";

export const useGetMPInteraction = () => {
  const url = "mp-interaction-data";

  const { data, isSuccess, refetch } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      return await get(url);
    },
    retry: false,
  });

  return {
    isSuccess,
    data,
    fetchMPs: refetch,
  };
};
