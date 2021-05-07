export class ObjectivesMethods {
    elements = {
        MenuBurger:'div[class="menu-avatar"]',
        MenuMyAccTitle:'a[class="menu-item"]',
        MenuObjectives:'ul[class="nav nav-tabs"]'
    }
    toObjectivesPage(){
        cy.get(this.elements.MenuBurger).click()
        cy.get(this.elements.MenuMyAccTitle).contains(' My account ').click()
        cy.get(this.elements.MenuObjectives).find('li').contains('Objectives').click()
    }

}
export const objectivesMethod = new ObjectivesMethods();