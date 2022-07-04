exports.handler = async function (event, context, callback) {
  try {
    const areas = require(`./areas.json`);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(areas),
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
