import express from "express";

import {
  createIncident,
  getIncidents,
  deleteIncident,
} from "../controllers/incidentController.js";

const router = express.Router();

router.post("/", createIncident);

router.get("/", getIncidents);

router.delete("/:id", deleteIncident);

export default router;