import { VacancyPayload } from "../APIs/Recruitment/payload/addVacancyPayload";

export default class VacanciesInit {
    static initVacancy(data: any, jobTitleId: number, employeeId: number): VacancyPayload {
        return {
            name: data.name,
            jobTitleId: jobTitleId,
            employeeId: employeeId,
            numOfPositions: data.numOfPositions,
            description: data.description,
            status: data.status,
            isPublished: data.isPublished
        }
    }
}