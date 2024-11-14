import caseService from "../../services/caseService.js";

class CaseController {
  async createCase(req, res) {
    const { caseData } = req.body;
    try {
      let createdCase = await caseService.createCase(caseData);
      res.status(201).json({ createdCase });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async deleteCase(req, res) {
    const { caseId } = req.params;
    try {
      let { rowsAffected } = await caseService.deleteCase(caseId);
      return res.status(204);
    } catch (error) {
      return res
        .status(error.message ? 400 : 500)
        .json({ message: error.message || "Internal server error" });
    }
  }
  async updateCaseStatus(req, res) {
    const { caseId } = req.params;
    const { newStatus } = req.body;
    try {
      let updatedRecord = await caseService.updateCaseStatus(caseId, newStatus);
      return res.status(200).json({
        message: "success",
        updatedRecord,
      });
    } catch (error) {
      return res
        .status(error.message ? 400 : 500)
        .json({ message: error.message || "Internal server error" });
    }
  }
}

const caseController = new CaseController();
export default caseController;
