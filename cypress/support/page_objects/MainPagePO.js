export class MainPagePO {
    elements = {
        MenuBurger: 'div[class="menu-avatar"]',
        MenuMyAccTitle: 'a[class="menu-item"]',
        MenuObjectives: 'ul[class="nav nav-tabs"]',
        MenuSubObjectives: 'ul[class="nav nav-tabs"]',
        SubLink: 'a[class="coordinates-link"]'
    }
    toObjectivesPage(){
        cy.get(this.elements.MenuBurger).click()
        cy.get(this.elements.MenuMyAccTitle).contains(' My account ').click()
        cy.get(this.elements.MenuObjectives).find('li').contains('Objectives').click()
    }
    toSubObjectivesPage(){
        cy.get(this.elements.MenuBurger).click()
        cy.get(this.elements.MenuMyAccTitle).contains(' My account ').click()
        cy.get(this.elements.MenuObjectives).find('li').contains('Coordinates').click()
        cy.get(this.elements.SubLink).click()
        cy.wait(1000)
        cy.get(this.elements.MenuSubObjectives).find('li').contains('Objectives').click()
    }
}
export const objectivesMethod = new MainPagePO();