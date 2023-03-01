import express from "express";
import winston from "winston"

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


app.listen(port, () => global.logger.info(`API started on port ${port}`));
