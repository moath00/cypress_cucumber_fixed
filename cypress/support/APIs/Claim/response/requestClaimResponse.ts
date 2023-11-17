export interface RequestClaimResponse {
    data: {
        id: number,
        referenceId: string,
        claimEvent: {
            id: number,
            name: string,
            status: boolean,
            isDeleted: boolean
        },
        currencyType: {
            id: string,
            name: string
        },
        remarks: string,
        status: string
    }
}