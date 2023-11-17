export interface AddEmployeeResponse {
    data: {
        empNumber: number,
        lastName: string,
        firstName: string,
        middleName: string,
        employeeId: number,
        terminationId: number
    }
}