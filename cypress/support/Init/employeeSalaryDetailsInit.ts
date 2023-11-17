import { EmployeeSalaryDetailsPayload } from "../APIs/PIM/payload/employeeSalaryDetailsPayload";

export default class EmployeeSalaryDetailsInit {
    static initSalary(data: any): EmployeeSalaryDetailsPayload {
        return {
            addDirectDeposit: data.addDirectDeposit,
            comment: data.comment,
            currencyId: data.currencyId,
            salaryAmount: data.salaryAmount,
            salaryComponent: data.salaryComponent
        }
    }
}