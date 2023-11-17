import { AddEventPayload } from "../../APIs/Claim/payload/addEventPayload";
import { AssignClaimPayload } from "../../APIs/Claim/payload/assignClaimPayload";
import { RequestClaimPayload } from "../../APIs/Claim/payload/requestClaimPayload";
import { AddEventResponse } from "../../APIs/Claim/response/addEventResponse";
import { AssignClaimResponse } from "../../APIs/Claim/response/assignClaimResponse";
import { RequestClaimResponse } from "../../APIs/Claim/response/requestClaimResponse";

declare global {
    namespace Cypress {
        interface Chainable {
            addEvent: (requestUrl: string, eventPayload: AddEventPayload) => Chainable<AddEventResponse>;
            assignClaim: (requestUrl: string, claimPayload: AssignClaimPayload) => Chainable<AssignClaimResponse>;
            requestClaim: (requestUrl: string, claimRequestPayload: RequestClaimPayload) => Chainable<RequestClaimResponse>;
            actionOnClaimRequest: (requestUrl: string, actionOnClaimPayload: any) => Chainable<any>;
            removeEvent: (requestUrl: string, deleteEventPayload: any) => Chainable<any>;
        }
    }
}

Cypress.Commands.add('addEvent', (requestUrl: string, eventPayload: AddEventPayload) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: eventPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});

Cypress.Commands.add('assignClaim', (requestUrl: string, claimPayload: AssignClaimPayload) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: claimPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});

Cypress.Commands.add('requestClaim', (requestUrl: string, claimRequestPayload: RequestClaimPayload) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: claimRequestPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});

Cypress.Commands.add('actionOnClaimRequest', (requestUrl: string, actionOnClaimPayload: any) => {
    return cy.api({
        method: 'PUT',
        url: requestUrl,
        body: actionOnClaimPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});

Cypress.Commands.add('removeEvent', (requestUrl: string, deleteEventPayload: any) => {
    return cy.api({
        method: 'DELETE',
        url: requestUrl,
        body: deleteEventPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});