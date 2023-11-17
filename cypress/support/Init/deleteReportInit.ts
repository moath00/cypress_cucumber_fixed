import { DeletedLocationPayload } from "../APIs/Admin/payload/deleteLocationPayload";

export default class DeletedReportInit {
    static initReport(id: string): DeletedLocationPayload {
        return {
            ids: [id],
        }
    }
}