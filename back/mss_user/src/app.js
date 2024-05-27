import express from "express";
import routes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use("/api", routes);

app.get("/test", (req, res) => {
  res.send("Hello from test");
});
export default app;
