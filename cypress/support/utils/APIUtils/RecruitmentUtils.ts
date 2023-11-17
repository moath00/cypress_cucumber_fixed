import { VacancyPayload } from "../../APIs/Recruitment/payload/addVacancyPayload";
import { VacancyResponse } from "../../APIs/Recruitment/response/addVacancyResponse";

declare global {
    namespace Cypress {
        interface Chainable {
            addVacancy: (requestUrl: string, vacancyPayload: VacancyPayload) => Chainable<VacancyResponse>;
        }
    }
}

Cypress.Commands.add('addVacancy', (requestUrl: string, vacancyPayload: VacancyPayload) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: vacancyPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});