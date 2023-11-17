export interface VacancyPayload {
    name: string;
    jobTitleId: number;
    employeeId: number;
    numOfPositions: number;
    description: string;
    status: boolean;
    isPublished: boolean;
}