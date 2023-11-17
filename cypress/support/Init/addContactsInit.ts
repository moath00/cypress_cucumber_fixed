import { EmployeeContactDetailsPayload } from "../APIs/PIM/payload/addContactPayload";

export default class EmployeeContactDetailsInit {
    static initContact(data: any): EmployeeContactDetailsPayload {
        return {
            name: data.name,
            relationship: data.relationship,
            homePhone: data.homePhone,
            officePhone: data.officePhone,
            mobilePhone: data.mobilePhone
        }
    }
}