import { AddEmployeePayload } from "../APIs/PIM/payload/addEmployeePayload"

export default class EmployeeInit{
    static initEmployee(data: any): AddEmployeePayload {
        return {
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            empPicture: '',
            employeeId: data.employeeId
        }
    }
}