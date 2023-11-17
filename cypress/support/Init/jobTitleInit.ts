import { JobTitlePayload } from "../APIs/Admin/payload/addJobTitlePayload";
import GenericHelper from "../Helpers/random-helper";

export default class JobTitleInit {
    static initJobTitlePayload(data: any): JobTitlePayload {
        return {
            title: `${data.title}${GenericHelper.genericRandomString()}`,
            description: data.description,
            specification: data.specification,
            note: data.note
        }
    }
}