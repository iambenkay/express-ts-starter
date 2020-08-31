import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

import webRouters from "./interfaces/web/routers";
import restRouters from "./interfaces/rest/routers";
import createMongooseConnection from "./services/database";

createMongooseConnection();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", restRouters);
app.use("/", webRouters);

export { app };
