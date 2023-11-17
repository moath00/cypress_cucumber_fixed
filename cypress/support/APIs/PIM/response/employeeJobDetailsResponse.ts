export interface EmployeeJobDetailsResponse {
    data: {
        empNumber: number,
        joinedDate: string,
        jobTitle: {
            id: number,
            title: string,
            isDeleted: false
        },
        jobSpecificationAttachment: {
            id: number,
            filename: string
        },
        empStatus: {
            id: number,
            name: string
        },
        jobCategory: {
            id: number,
            name: string
        },
        subunit: {
            id:number,
            name: string,
            unitId: string
        },
        location: {
            id: number,
            name: string
        },
        employeeTerminationRecord: {
            id: number,
            date: string
        }
    }
}