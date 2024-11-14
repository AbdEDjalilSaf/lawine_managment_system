import caseRepository from "../data/caseRepository.js";

class CaseService {
  async createCase(caseData) {
    if (caseData.title.length < 10) {
      throw new Error("Title must be short and descriptive");
    }
    return await caseRepository.createCase(caseData);
  }
  async deleteCase(caseId) {
    let caseToBeDeleted = await caseRepository.findCaseById(caseId);
    if (!caseToBeDeleted) {
      throw new Error("No case matches that id");
    }
    let rowsAffected = await caseRepository.deleteCase(caseId);
    if (rowsAffected < 1) {
      throw new Error("No record was deleted.");
    }
    return rowsAffected;
  }
  async updateCaseStatus(caseId, newStatus) {
    //look for invalid id;
    let caseToBeUpdated = await caseRepository.findCaseById(caseId);
    if (!caseToBeUpdated) {
      throw new Error("No case matches that id");
    }

    //check for the validity of the new status
    let expectedStatus = ["open", "closed", "in progress", "on hold"];
    let isNewStatusValid = expectedStatus.includes(newStatus);
    if (!isNewStatusValid) {
      throw new Error("New status is invalid.");
    }
    let [rowsAffected] = await caseRepository.updateCaseStatus(
      caseId,
      newStatus
    );

    if (rowsAffected > 0) {
      return await caseRepository.findCaseById(caseId);
    } else {
      throw new Error("No record was updated.");
    }
  }
}
const caseService = new CaseService();

export default caseService;
