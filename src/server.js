import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.urlencoded({ extended: true })); // gian luot hoa cac thong so gui len server
// app.use(express.json());

let port = process.env.PORT || 8080;

configViewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
  console.log("App is running at the port", port);
});
