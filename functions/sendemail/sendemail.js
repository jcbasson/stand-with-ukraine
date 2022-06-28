const client = require("@sendgrid/mail");
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } =
  process.env;

exports.handler = async function (event, context, callback) {
  console.log("JC SENDGRID_API_KEY = ", SENDGRID_API_KEY);
  const { subject, message, senderEmail, candidates } = JSON.parse(event.body);
  client.setApiKey(SENDGRID_API_KEY);

  const data = {
    to: senderEmail,
    from: senderEmail,
    subject,
    html: message,
  };

  try {
    await client.send(data);
    return {
      statusCode: 200,
      body: "Message sent",
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
