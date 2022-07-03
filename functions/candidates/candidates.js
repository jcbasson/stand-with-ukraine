exports.handler = async function (event, context, callback) {
  try {
    const { area } = event.queryStringParameters;
    const candidates = require(`./candidates/${area}.json`);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: candidates,
    };
  } catch (err) {
    console.log("err: ", err);
    return {
      statusCode: err.code,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
