export interface DefineReportPayload {
    name: string,
    include: string,
    criteria: {
        14: {
            operator: string,
            x: string,
            y: string
        },
        20: {
            operator: string,
            x: string,
            y: string
        }
    },
    fieldGroup: {
        1: {
            fields: [number],
            includeHeader: boolean
        },
        6: {
            fields: [number],
            includeHeader: boolean
        },
        7: {
            fields: [number],
            includeHeader: boolean
        }
    }
}