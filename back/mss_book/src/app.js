import express from "express";
import routes from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());
app.use("/mssbook", routes);

export default app;
