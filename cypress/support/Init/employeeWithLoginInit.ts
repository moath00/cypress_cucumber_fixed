import { EmployeeLoginInfoPayload } from "../APIs/PIM/payload/employeeLoginPayload"
import GenericHelper from "../Helpers/random-helper"

export default class EmployeeLoginInfoInit{
    static initLoginInfo(data: any, empNumber: number): EmployeeLoginInfoPayload {
        return {
            username: `${data.username}${GenericHelper.genericRandomString()}`,
            password: data.password,
            status: data.status,
            userRoleId: data.userRoleId,
            empNumber: empNumber,
        }
    }
}