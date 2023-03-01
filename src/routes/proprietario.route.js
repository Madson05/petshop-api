import express from "express";
import proprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", proprietarioController.createProprietario);
router.get("/", proprietarioController.getProprietarios);

export default router;
