import express from "express";
import HomeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", HomeController.getHomePage);

  router.post("/webhook", HomeController.postWebhook);
  router.get("/messaging-webhook", HomeController.getWebhook);
  return app.use("/", router);
};

module.exports = initWebRoutes;