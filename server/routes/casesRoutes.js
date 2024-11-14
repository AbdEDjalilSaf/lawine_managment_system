import express from "express";
import casesController from "../controllers/cases/caseController.js";

const casesRoutes = express.Router();

casesRoutes.post("/create-case", casesController.createCase);
casesRoutes.delete("/delete-case/:caseId", casesController.deleteCase);
casesRoutes.put(
  "/update-case-status/:caseId",
  casesController.updateCaseStatus
);
export default casesRoutes;
