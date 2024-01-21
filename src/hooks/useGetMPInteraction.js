import { useQuery } from "@tanstack/react-query";
import { get } from "../api/requests";

export const useGetMPInteraction = () => {
  const { data } = useQuery({
    queryKey: ["mp-interaction-data"],
    queryFn: async ({ queryKey }) => {
      const url = queryKey[0];

      return await get(url);
    },
    retry: false,
  });

  console.log("JC data = ", data);
  return data;
};
