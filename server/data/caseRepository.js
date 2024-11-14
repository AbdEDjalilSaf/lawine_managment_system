import Case from "../models/caseModel.js";

class CaseRepository {
  //CRUD
  async createCase(caseData) {
    return await Case.create(caseData);
  }
  async deleteCase(caseId) {
    return await Case.destroy({
      where: {
        id: caseId,
      },
    });
  }
  async updateCaseStatus(caseId, newStatus) {
    return await Case.update(
      { status: newStatus },
      {
        where: {
          id: caseId,
        },
      }
    );
  }
  //FILTERING
  async findCaseByCaseNumber(caseNumber) {
    return await Case.findOne({
      where: {
        caseNumber,
      },
    });
  }
  async findCaseById(caseId) {
    return await Case.findOne({
      where: {
        id: caseId,
      },
    });
  }
}
const caseRepository = new CaseRepository();

export default caseRepository;
