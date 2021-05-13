export class PortalLogin {
    elements = {
       // Url: 'https://dev-auth.andersenlab.dev/login',
       Url: 'https://dev-qa-team.andersenlab.com/',
       //  Url: 'https://dev-auth.andersenlab.dev/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dteams-dev-qa%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access%26redirect_uri%3Dhttps%253A%252F%252Fdev-qa-team.andersenlab.com%26response_mode%3Dquery',
       LogString:'input[id="login"]',
       PassString:'input[id="password"]',
       SubBTN:'button[class="btn-submit"]',
       PersonLog:'portal.pm',
       PersonPass:'OY1AE01anwlJ'
    }
    loginPortal(login = this.elements.PersonLog, password = this.elements.PersonPass){
        cy.clearCookies()
        cy.visit(this.elements.Url)
        cy.get(this.elements.LogString).type(this.elements.PersonLog)
        cy.get(this.elements.PassString).type(this.elements.PersonPass)
        cy.get(this.elements.SubBTN).click()
    }
}
export const login = new PortalLogin();