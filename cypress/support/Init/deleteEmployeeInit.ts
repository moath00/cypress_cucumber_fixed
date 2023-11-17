import { DeleteEmployeePayload } from "../APIs/Admin/payload/deleteEmployeePayload";

export default class DeleteEmployeeInit {
    static initDeleteEmployeePayload(IDs: number[]): DeleteEmployeePayload {
        return {
            ids: IDs
        }
    }
}