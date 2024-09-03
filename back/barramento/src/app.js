import dotenv from "dotenv";
dotenv.config();
import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());
const EVENTBUS_PORT = process.env;
const mssUserURL = process.env.MSSUSER_URL;
const mssBookURL = process.env.MSSBOOK_URL;

app.get("/", (req, res) => {
  res.send("EventBus is running...");
});

app.post("/event", async (req, res) => {
  try {
    if (req.body.type === "UserCreated") {
      const response = await axios.post(`${mssBookURL}/event`, req.body);
      res.status(response.status).send(response.data);
    }
  } catch {
    res.status(500).send("MSS is unavailable");
  }
  // console.log("Received event:", event);
  // await axios.post(`${process.env.POSTS_SERVICE_URL_MSS1}/event`, event);
  // await axios.post(`${process.env.POSTS_SERVICE_URL_MSS2}/event`, event);
  // await axios.post(`${process.env.POSTS_SERVICE_URL_MSS3}/event`, event);
});

app.listen(EVENTBUS_PORT, () =>
  console.log(`Barramento na Porta: ${EVENTBUS_PORT}`)
);
