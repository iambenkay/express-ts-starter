require("dotenv").config();
import { app } from "./server";
import http from "http";

const { PORT = 3000 } = process.env;

http.createServer(app).listen(PORT, () => {
  console.log(`HTTP Server started on port ${PORT}`);
});
