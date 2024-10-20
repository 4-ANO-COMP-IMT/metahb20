import dotenv from "dotenv";
dotenv.config();
import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());
const EVENTBUS_PORT = process.env.EVENTBUS_PORT;
const mssUserURL = process.env.MSSUSER_URL;
const mssBookURL = process.env.MSSBOOK_URL;

app.get("/", (req, res) => {
  res.send("EventBus is running...");
});

app.post("/event", async (req, res) => {
  try {
    if (req.body.type === "UserCreated") {
      const response = await axios.post(mssBookURL + "/bookshelf", req.body);
      res.status(response.status).send(response.data);
    }

    if (req.body.type === "UserDeleted") {
      console.log(req.body.userID);

      const response = await axios.delete(
        mssBookURL + "/bookshelf/" + req.body.userID
      );
      res.status(response.status).send(response.data);
    }
  } catch {
    res.status(500).send("MSS is unavailable");
  }
});

app.listen(EVENTBUS_PORT, () =>
  console.log(`Barramento na Porta: ${EVENTBUS_PORT}`)
);
