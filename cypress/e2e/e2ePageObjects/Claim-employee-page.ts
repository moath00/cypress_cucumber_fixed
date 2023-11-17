import Sidebar from "../../support/Helpers/sidebar-switch-helper";
import RequestClaimPayloadInit from "../../support/Init/requestClaimInit";

const sidebar = new Sidebar();

export const URLs = {
    requestClaim: 'api/v2/claim/requests',
    actionOnClaimRequest: (id: number) => `api/v2/claim/requests/${id}/action`
}

export default class ClaimEmp {
    elements = {
        topNavbar: () => cy.get('.oxd-topbar-body-nav-tab'),

    }

    open() {
        sidebar.itemPageNumber(7);
    }

    requestClaim(eventId: number, data: any) {
        const completeData = { "claimEventId": eventId, "currencyId": data.currencyId, "remarks": data.remarks };
        return cy.requestClaim(URLs.requestClaim, RequestClaimPayloadInit.initRequest(completeData));
    }

    actionOnClaimRequest(requestId: number, action: string) {
        return cy.actionOnClaimRequest(URLs.actionOnClaimRequest(requestId), { "action": action });
    }

}