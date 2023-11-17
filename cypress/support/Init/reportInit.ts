import { DefineReportPayload } from "../APIs/PIM/payload/defineReportPayload";

export default class ReportInit {
    static initReport(data: any): DefineReportPayload {
        return {
            name: data.name,
            include: data.include,
            criteria: data.criteria,
            fieldGroup: data.fieldGroup
        }
    }
}