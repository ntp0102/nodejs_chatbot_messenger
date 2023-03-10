import express from "express";
import HomeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", HomeController.getHomePage);

  router.post("/webhook", HomeController.postWebhook);
  router.get("/webhook", HomeController.getWebhook);

  router.post("/about", (req, res) => {
    let a = req.body;
    console.log(a);
    res.send(a);
  });
  return app.use("/", router);
};

module.exports = initWebRoutes;
