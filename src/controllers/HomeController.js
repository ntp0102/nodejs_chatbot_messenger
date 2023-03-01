require("dotenv").config();

let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

let postWebhook = (req, res) => {
  let body = req.body;
  console.log(body);
  console.log(`\u{1F7EA} Received webhook:`);
  console.dir(body, { depth: null });

  if (body && body.object === "page") {
    res.status(200).send("EVENT_RECEIVED");

    // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.
  } else {
    res.sendStatus(404);
  }
};

let getWebhook = (req, res) => {
  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
};

let test = (req, res) => {
  let body = req.body;
  console.log("check", body);
  return res.send(body);
};

module.exports = {
  getHomePage: getHomePage,
  postWebhook: postWebhook,
  getWebhook: getWebhook,
  test: test,
};
