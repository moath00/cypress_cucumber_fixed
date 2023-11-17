import { DeletedLocationPayload } from "../APIs/Admin/payload/deleteLocationPayload";

export default class DeleteLocationInit {
    static initDeletedLocationPayload(data: any): DeletedLocationPayload {
        return {
            ids: [data] // this format because data passed as single location id
        }
    }
}