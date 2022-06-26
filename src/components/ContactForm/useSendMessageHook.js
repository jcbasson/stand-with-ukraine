import { useMutation } from "react-query";
import axiosNetlify from "../../utils/axios-netlify";

export const useSendMessage = ({ onSuccessHandler, onErrorHandler }) => {
  const { isLoading, mutate: sendMessage } = useMutation(
    async ({ candidates, firstName, lastName, email, subject, message }) => {
      return await axiosNetlify.post(`.netlify/functions/sendemail`, {
        candidates,
        firstName,
        lastName,
        email,
        subject,
        message,
      });
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        console.log("onSuccess res = ", res);
        onSuccessHandler(result);
      },
      onError: (err) => {
        console.log("onError err = ", err);
        onErrorHandler(err.response?.data || err);
      },
    }
  );

  return [isLoading, sendMessage];
};
