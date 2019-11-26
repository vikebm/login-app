import express from "express";
import bodyParser from "body-parser";
import http from "http";
import makeCallBack from "./express-callback";
import figlet from "figlet";
import { userController } from "./controllers";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post(`/api/v1/user/`, makeCallBack(userController.addUser));
app.post(`/api/v1/user/login/`, makeCallBack(userController.checkUser));

const httpServer = http.createServer(app);

httpServer.listen(3000);

figlet("LOGIN API", function(err, data) {
  if (err) {
    return;
  }
  console.log(data);
});

export default app;
