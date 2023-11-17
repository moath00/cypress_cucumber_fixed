import { DeleteJobTitlePayload } from "../APIs/Admin/payload/deleteJobTitlePayload";

export default class DeleteJobTitleInit {
    static initDeletedJobTitlePayload(data: any): DeleteJobTitlePayload {
        return {
            ids: [data] // this format because data passed as single job title id
        }
    }
}