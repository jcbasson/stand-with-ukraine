import { getContent } from "./getContent";

exports.handler = async function (event, context, callback) {
  try {
    const content = getContent();

    return {
      statusCode: 200,
      body: content,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err) {
    console.log("err: ", err);
    return {
      statusCode: err.code,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow from anywhere
      },
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
