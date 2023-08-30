import express from "express";
import config from "./config"; 
import apiRouter from "./routes"; 
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", apiRouter); 

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
