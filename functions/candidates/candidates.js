exports.handler = async function (event, context, callback) {
  try {
    const { area } = event.queryStringParameters;
    const candidates = [];

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(candidates),
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
