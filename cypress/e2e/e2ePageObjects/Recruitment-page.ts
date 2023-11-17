import { VacancyPayload } from "../../support/APIs/Recruitment/payload/addVacancyPayload";
import VacanciesInit from "../../support/Init/addVacancyInit";
import Sidebar from "../../support/Helpers/sidebar-switch-helper";

const sidebar = new Sidebar();

export const URLs = {
    vacancy: 'api/v2/recruitment/vacancies'
}

export default class Recruitment {
    elements = {
        candidateTopBarBtn: () => cy.get('.oxd-topbar-body-nav-tab').eq(0),
        vacancyTopBarBtn: () => cy.get('.oxd-topbar-body-nav-tab').eq(1),
        addCandidateBtn: () => cy.get('.oxd-button--secondary').eq(1),
        addCandidatePage: {
            nameInputs: () => [cy.get('.oxd-input').eq(1), cy.get('.oxd-input').eq(2), cy.get('.oxd-input').eq(3)],
            emailInput: () => cy.get('.oxd-input').eq(4),
            dropDownVacancyField: () => cy.get('.oxd-select-text'),
            dropDownList: () => cy.get('[role="listbox"]'),
            dropDownItems: () => cy.get('[role="option"]'),
            saveCandidateBtn: () => cy.get('[type="submit"]')
        },
        applicationStage: {
            shortListBtn: () => cy.get('.oxd-button--success'),
            saveDataBtn: () => cy.get('[type="submit"]'),
            scheduleInterviewBtn: () => cy.get('.oxd-button--success'),
            scheduleInterViewInputs: {
                interviewTitleInput: () => cy.get('.oxd-input').eq(5),
                interviewerInput: () => cy.get('.oxd-input').eq(6),
                interviewerList: () => cy.get('[role="option"]').eq(0),
                dateInterviewInput: () => cy.get('.oxd-input').eq(7),
                droppedCalender: () => cy.get('.oxd-date-input-calendar'),
                droppedDate_Today: () => cy.get('.oxd-calendar-date .--selected .--today'),
                saveDataBtn: () => cy.get('[type="submit"]'),
            },
            markInterviewFailBtn: () => cy.get('.orangehrm-recruitment-actions > button:nth-child(2)'),
            markInterviewPassBtn: () => cy.get('.orangehrm-recruitment-actions > button:nth-child(3)'),
            statusLabel: () => cy.get('.oxd-text--subtitle-2'),
        },
        candidateProfile: {
            editScrollBtn: () => cy.get('.oxd-switch-input'),
            resumeFileBtn: () => cy.get('.oxd-file-button'),
            addedFileDownloadBtn: () => cy.get('.orangehrm-file-preview'),
        }
    }

    open(): void {
        sidebar.itemPageNumber(5);
    }

    addVacancy(data: any, jobTitleId: number, employeeId: number) {
        return cy.addVacancy(URLs.vacancy, VacanciesInit.initVacancy(data, jobTitleId, employeeId));
    }

    openAddCandidatePage(): void {
        this.elements.addCandidateBtn().click();
    }

    async addCandidateViaUI(data: any): Promise<any> {
        let currentUrl: string;
        this.elements.addCandidatePage.nameInputs()[0].type(data.firstName);
        this.elements.addCandidatePage.nameInputs()[1].type(data.middleName);
        this.elements.addCandidatePage.nameInputs()[2].type(data.lastName);
        this.elements.addCandidatePage.dropDownVacancyField().click({ force: true });
        // this.elements.addCandidatePage.dropDownList().scrollTo(0, 400);
        this.elements.addCandidatePage.dropDownItems().eq(0).scrollIntoView();
        this.elements.addCandidatePage.dropDownItems().eq(0).click();
        this.elements.addCandidatePage.emailInput().type(data.email);
        this.elements.addCandidatePage.saveCandidateBtn().click();

        return currentUrl = await new Promise<string>(resolve => cy.url().then( (url) => {
            resolve(url);
        }));
    }

    openAddedCandidatePage(candidateUrl: string) {
        cy.visit(candidateUrl);
    }

    shortListInitiatedCandidate(): void {
        this.elements.applicationStage.shortListBtn().click();
        this.elements.applicationStage.saveDataBtn().click();
    }

    scheduleInterviewForCandidate(): void {
        this.elements.applicationStage.scheduleInterviewBtn().click();
        this.elements.applicationStage.scheduleInterViewInputs.interviewTitleInput().type('Main interview');
        this.elements.applicationStage.scheduleInterViewInputs.interviewerInput().type('Moath');
        this.elements.applicationStage.scheduleInterViewInputs.interviewerList().click();
        this.elements.applicationStage.scheduleInterViewInputs.dateInterviewInput().click();
        this.elements.applicationStage.scheduleInterViewInputs.droppedDate_Today().click();
        this.elements.applicationStage.scheduleInterViewInputs.saveDataBtn().click();
    }

    markInterviewPass(): void {
        this.elements.applicationStage.markInterviewPassBtn().click();
        this.elements.applicationStage.saveDataBtn().click();
    }

    markInterviewFailed(): void {
        this.elements.applicationStage.markInterviewFailBtn().click();
        this.elements.applicationStage.saveDataBtn().click();
    }

    enableEditCandidate(): void {
        this.elements.candidateProfile.editScrollBtn().click({ force: true });
    }

    editCandidateProfileToAttachFile(filePath: string): void {
        this.elements.candidateProfile.resumeFileBtn().attachFile(filePath);
        this.elements.applicationStage.saveDataBtn().click();
    }

    downloadAttachedFile(): void {
        this.elements.candidateProfile.addedFileDownloadBtn().click({ force: true });
    }

    assertAttachedFileContent(fileUploadedPath: string, fileDownloadedPath: string): void {
        cy.readFile(fileUploadedPath).should('eq', 'Data for testing and automation - GSG');
        cy.readFile(fileDownloadedPath).should('eq', 'Data for testing and automation - GSG');
    }

    assertTheCurrentStatus(status: string): void {
        this.elements.applicationStage.statusLabel().contains(status);
    }
}