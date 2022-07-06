// const client = require("@sendgrid/mail");
// const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } =
//   process.env;

exports.handler = async function (event, context, callback) {
  try {
    const { subject, senderEmail } = JSON.parse(event.body);
    // client.setApiKey(SENDGRID_API_KEY);

    // const data = {
    //   to: senderEmail,
    //   from: senderEmail,
    //   subject,
    //   html: message,
    // };

    // await client.send(data);
    return {
      statusCode: 200,
      body: `${subject} message sent from ${senderEmail}`,
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
