import { JobTitleResponse } from "../../support/APIs/Admin/response/addJobTitleResponse";
import { LocationResponse } from "../../support/APIs/Admin/response/addLocationResponse";
import { DeleteEmployeeResponse } from "../../support/APIs/Admin/response/deleteEmployeeResponse";
import Sidebar from "../../support/Helpers/sidebar-switch-helper";
import JobTitleInit from "../../support/Init/jobTitleInit";
import DeleteEmployeeInit from "../../support/Init/deleteEmployeeInit";
import LocationInit from "../../support/Init/locationInit";
import DeleteJobTitleInit from "../../support/Init/deleteJobTitleInit";
import DeleteLocationInit from "../../support/Init/deleteLocationInit";

const sidebar = new Sidebar();

export const ADMIN_URLs = {
    jobTitle: 'api/v2/admin/job-titles',
    location: 'api/v2/admin/locations',
    deleteEmployee: 'api/v2/admin/users',
    deleteJobTitle: 'api/v2/admin/job-titles',
    deleteLocation: 'api/v2/admin/locations',
}

export default class Admin {
    elements = {
        jobBtn: () => cy.get('.oxd-topbar-body-nav-tab').eq(1),
        droppedJobsListItems: () => cy.get('[role="menuitem"]'),
        organizationBtn: () => cy.get('.oxd-topbar-body-nav-tab').eq(2),
        droppedOrganizationListItems: () => cy.get('[role="menuitem"]'),
    }

    open(): void {
        sidebar.itemPageNumber(1);
    }

    viewJobs(): void {
        this.elements.jobBtn().click();
        this.elements.droppedJobsListItems().eq(0).click();
    }

    createJobTitleViaAPI(data: any) {
        return cy.addJobTitle(ADMIN_URLs.jobTitle, JobTitleInit.initJobTitlePayload(data));
    }

    viewLocations(): void {
        this.elements.organizationBtn().click();
        this.elements.droppedOrganizationListItems().eq(1).click();
    }

    createLocationViaAPI(data: any) {
        return cy.addLocation(ADMIN_URLs.location, LocationInit.initLocationPayload(data));
    }

    deleteEmployeeViaAPI(employeeIDsToDelete: number[]) {
        return cy.deleteEmployee(ADMIN_URLs.deleteEmployee, DeleteEmployeeInit.initDeleteEmployeePayload(employeeIDsToDelete));
    }

    deleteJobTitleViaAPI(jobTitleIDsToDelete: number[]) {
        // passed only the first job title id because ids passed single job title id sent in array
        return cy.deleteJobTitle(ADMIN_URLs.deleteJobTitle, DeleteJobTitleInit.initDeletedJobTitlePayload(jobTitleIDsToDelete[0]));
    }

    deleteLocationViaAPI(locationIDsToDelete: number[]) {
        // passed only the first location id because ids passed single location id sent in array
        return cy.deleteLocation(ADMIN_URLs.deleteLocation, DeleteLocationInit.initDeletedLocationPayload(locationIDsToDelete[0]));
    }
}