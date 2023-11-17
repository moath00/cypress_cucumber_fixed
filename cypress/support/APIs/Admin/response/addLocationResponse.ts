export interface LocationResponse {
    data: {
        id: number,
        name: number,
        country: {
          countryCode: string,
          name: string,
          countryName: string
        },
        province: string,
        city: string,
        address: string,
        zipCode: string,
        phone: string,
        fax: string,
        note: string,
        noOfEmployees: number
      }
}