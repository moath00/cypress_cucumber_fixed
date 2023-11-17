export interface EmployeeLoginInfoResponse {
    data: {
        id: number,
        userName: string,
        deleted: boolean,
        status: boolean,
        employee: {
            empNumber: number,
            employeeId: number,
            firstName: string,
            middleName: string,
            lastName: string,
            terminationId: string
        },
        userRole: {
            id: number,
            name: string,
            displayName: string
        }
    }
}