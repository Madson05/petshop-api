import express from "express";
import winston from "winston";
import animalsRouter from "./routes/animal.route.js"
import proprietariosRouter from "./routes/proprietario.route.js"

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "petshop-api.log" }),
  ],

  format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});

const port = 3000;
const app = express();

app.use(express.json());
app.use("/proprietario", proprietariosRouter);
app.use("/animal", animalsRouter);
app.use((error, req, res, next) => {
  global.logger.error(`${req.method} ${req.baseUrl} ${error.message}`);
  res.status(400).send({ error: error.message });
});


app.listen(port, () => global.logger.info(`API started on port ${port}`));
