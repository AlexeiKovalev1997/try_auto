export class PortalLogin {
    elements = {
       Url: 'https://dev-auth.andersenlab.dev/login',
       LogString:'input[id="login"]',
       PassString:'input[id="password"]',
       SubBTN:'button[class="btn-submit"]',
       PersonLog:'portal.pm',
       PersonPass:'OY1AE01anwlJ'
    }
    loginPortal(login = this.elements.PersonLog, password = this.elements.PersonPass){
        cy.visit(this.elements.Url)
        cy.clearCookies()
        cy.get(this.elements.LogString).type(this.elements.PersonLog)
        cy.get(this.elements.PassString).type(this.elements.PersonPass)
        cy.get(this.elements.SubBTN).click()
    }
}
export const login = new PortalLogin();