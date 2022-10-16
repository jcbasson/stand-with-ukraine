import { getMessage} from './getMessage';

exports.handler = async function (event, context, callback) {
    try {
      
        const message = getMessage();
      
      return {
        statusCode: 200,
        body: {message},
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
  