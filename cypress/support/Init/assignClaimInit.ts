import { AssignClaimPayload } from "../APIs/Claim/payload/assignClaimPayload";

export default class AssignClaimPayloadInit {
    static initClaim(data: any): AssignClaimPayload {
        return {
            claimEventId: data.claimEventId,
            currencyId: data.currencyId,
            remarks: data.remarks
        }
    }
}