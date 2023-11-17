export interface EmployeeSalaryDetailsResponse {
    data: {
        id: number,
        amount: number,
        salaryName: string,
        comment: string,
        payPeriod: {
            id: any,
            name: string
        },
        payGrade: {
            id: any,
            name: string
        },
        currencyType: {
            id: string,
            name: string
        },
        directDebit: {
            id: any,
            routingNumber: any,
            account: string,
            amount: any,
            accountType: string
        }
    }
}