export interface EmployeeContactDetailsResponse {
    data: {
        street1: string,
        street2: string,
        city: string,
        province: string,
        zipCode: string,
        countryCode: string,
        homeTelephone: string,
        workTelephone: string,
        mobile: string,
        workEmail: string,
        otherEmail: string
    }
}