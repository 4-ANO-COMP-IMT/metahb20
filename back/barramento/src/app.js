import dotenv from "dotenv";
dotenv.config();
import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("EventBus is running...");
});

app.post("/event", async (req, res) => {
  const event = req.body;
  console.log("Received event:", event);
  await axios.post(`${process.env.POSTS_SERVICE_URL_MSS1}/event`, event);
  await axios.post(`${process.env.POSTS_SERVICE_URL_MSS2}/event`, event);
  await axios.post(`${process.env.POSTS_SERVICE_URL_MSS3}/event`, event);
});
