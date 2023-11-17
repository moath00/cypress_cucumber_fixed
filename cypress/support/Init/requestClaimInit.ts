import { RequestClaimPayload } from "../APIs/Claim/payload/requestClaimPayload"

export default class RequestClaimPayloadInit {
    static initRequest(data: any): RequestClaimPayload {
        return {
            claimEventId: data.claimEventId,
            currencyId: data.currency,
            remarks: data.remarks
        }
    }
}