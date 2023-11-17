import { EmployeeJobDetailsPayload } from "../APIs/PIM/payload/employeeJobDetailsPayload";
import { EmployeeDetailsPayload } from "../APIs/PIM/payload/employeeDetailsPayload";

export default class EmployeeJobDetailsInit {
    static initJobDetails(data: any, jobId?: number, locationId?: number): EmployeeJobDetailsPayload | EmployeeDetailsPayload {
        if (jobId && locationId)
            return {
                joinedDate: data.joinedDate,
                jobTitleId: jobId,
                empStatusId: data.empStatusId,
                jobCategoryId: data.jobCategoryId,
                subunitId: data.subunitId,
                locationId: locationId
            };
        return {
            joinedDate: data.joinedDate,
            jobTitleId: data.jobTitleId
        }
    }
}