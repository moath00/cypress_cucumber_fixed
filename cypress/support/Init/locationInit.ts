import { LocationPayload } from "../APIs/Admin/payload/addLocationPayload";

export default class LocationInit {
    static initLocationPayload(data: any): LocationPayload {
        return {
            name: data.name,
            countryCode: data.countryCode,
            province: data.province,
            city: data.city,
            address: data.address,
            zipCode: data.zipCode,
            phone: data.phone,
            fax: data.fax,
            note: data.note
        }
    }
}