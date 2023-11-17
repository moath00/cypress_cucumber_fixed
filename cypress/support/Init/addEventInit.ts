import { AddEventPayload } from "../APIs/Claim/payload/addEventPayload";

export default class EventPayloadInit {
    static initEvent(data: any): AddEventPayload {
        return {
            name: data.name,
            description: data.description,
            status: data.status
        }
    }
}