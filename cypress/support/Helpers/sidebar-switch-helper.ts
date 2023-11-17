export default class Sidebar {
    elements = {
        pages: () => cy.get('.oxd-main-menu-item-wrapper')
    };

    itemPageNumber(page: number): void {
        this.elements.pages().eq(page - 1).click();
    }
}