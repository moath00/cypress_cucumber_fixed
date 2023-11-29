import { JobTitlePayload } from "../../APIs/Admin/payload/addJobTitlePayload";
import { LocationPayload } from "../../APIs/Admin/payload/addLocationPayload";
import { DeleteEmployeePayload } from "../../APIs/Admin/payload/deleteEmployeePayload";
import { DeleteJobTitlePayload } from "../../APIs/Admin/payload/deleteJobTitlePayload";
import { DeletedLocationPayload } from "../../APIs/Admin/payload/deleteLocationPayload";
import { JobTitleResponse } from "../../APIs/Admin/response/addJobTitleResponse";
import { LocationResponse } from "../../APIs/Admin/response/addLocationResponse";
import { DeleteEmployeeResponse } from "../../APIs/Admin/response/deleteEmployeeResponse";
import { DeleteJobTitleResponse } from "../../APIs/Admin/response/deleteJobTitleResponse";
import { DeletedLocationResponse } from "../../APIs/Admin/response/deletedLocationResponse";

// Admin actions
declare global {
  namespace Cypress {
    interface Chainable {
      addJobTitle: (
        requestUrl: string,
        jobTitlePayload: JobTitlePayload
      ) => Chainable<JobTitleResponse>;
      addLocation: (
        requestUrl: string,
        locationPayload: LocationPayload
      ) => Chainable<LocationResponse>;
      deleteEmployee: (
        requestUrl: string,
        deleteEmployeePayload: DeleteEmployeePayload
      ) => Chainable<DeleteEmployeeResponse>;
      deleteJobTitle: (
        requestUrl: string,
        deleteJobTitlePayload: DeleteJobTitlePayload
      ) => Chainable<DeleteJobTitleResponse>;
      deleteLocation: (
        requestUrl: string,
        deleteLocationPayload: DeletedLocationPayload
      ) => Chainable<DeletedLocationResponse>;
    }
  }
}

Cypress.Commands.add(
  "addJobTitle",
  (requestUrl: string, jobTitlePayload: JobTitlePayload) => {
    return cy
      .api({
        method: "POST",
        url: requestUrl,
        body: jobTitlePayload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "addLocation",
  (requestUrl: string, locationPayload: LocationPayload) => {
    return cy
      .api({
        method: "POST",
        url: requestUrl,
        body: locationPayload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "deleteEmployee",
  (requestUrl: string, deleteEmployeePayload: DeleteEmployeePayload) => {
    return cy
      .api({
        method: "DELETE",
        url: requestUrl,
        body: deleteEmployeePayload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "deleteJobTitle",
  (requestUrl: string, deleteJobTitlePayload: DeleteJobTitlePayload) => {
    return cy
      .api({
        method: "DELETE",
        url: requestUrl,
        body: deleteJobTitlePayload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "deleteLocation",
  (requestUrl: string, deleteLocationPayload: DeletedLocationPayload) => {
    return cy
      .api({
        method: "DELETE",
        url: requestUrl,
        body: deleteLocationPayload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .its("body");
  }
);
