import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT_MSSUSER;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
