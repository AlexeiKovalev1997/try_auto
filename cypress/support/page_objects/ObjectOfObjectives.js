export class ObjectivesElements {
    elements = {
        TableTitle: 'h1[class="employee-h1 objectives-header__title"]',
        InfoButton: 'button[class="btn yellow"]',
        ObjectivesData: 'span[class="next-salary-date-label"]',
        TableObjective: 'th[class="mat-header-cell cdk-column-objective mat-column-objective ng-star-inserted"]',
        TableType: 'th[class="mat-header-cell cdk-column-type mat-column-type ng-star-inserted"]',
        TableMeasure: 'th[class="mat-header-cell cdk-column-measure mat-column-measure ng-star-inserted"]',
        TableDueDate: 'th[class="mat-header-cell cdk-column-dueDate mat-column-dueDate ng-star-inserted"]',
        TableComment: 'th[class="mat-header-cell cdk-column-comment mat-column-comment ng-star-inserted"]',
        TableObjString: 'andteam-objectives-list[class="ng-star-inserted"] tr[class="mat-row ng-star-inserted"]',
        TableStatus: '.archive-objects-list.ng-star-inserted td .ng-star-inserted span',
        InfoModal: 'div[class="objectives-instruction"]',
        InfoModalBTNGot: 'button[class="objectives-instruction-btn"]',
        InfoModalBTNClose: 'button[class="objectives-instruction-close"]',
        PageBackground: 'div.cdk-overlay-backdrop.cdk-overlay-dark-backdrop.cdk-overlay-backdrop-showing'
    }
    getTableTitle(objOrArch = 'objectives') {
        if (objOrArch == 'objectives') {
            cy.get(this.elements.TableTitle).first()
                .should('have.text', 'Objectives')
        } else if (objOrArch == 'archive') {
            cy.get(this.elements.TableTitle).last()
                .should('have.text', 'Archive')
        }

    }

    getInfoButton(objOrArch = 'objectives') {
        if (objOrArch == 'objectives') {
            cy.get(this.elements.InfoButton).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch == 'archive') {
            cy.get(this.elements.InfoButton).last()
                .should('exist')
                .and('be.visible')
        }
    }

    getObjectivesData() {
        cy.get(this.elements.ObjectivesData)
            .should('exist')
            .and('be.visible')
    }

    getTableObjective(objOrArch = 'objectives') {
        if (objOrArch == 'objectives') {
            cy.get(this.elements.TableObjective).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch == 'archive') {
            cy.get(this.elements.TableObjective).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableType(objOrArch = 'objectives') {
        if (objOrArch == 'objectives') {
            cy.get(this.elements.TableType).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch == 'archive') {
            cy.get(this.elements.TableType).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableMeasure(objOrArch = 'objectives') {
        if (objOrArch == 'objectives') {
            cy.get(this.elements.TableMeasure).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch == 'archive') {
            cy.get(this.elements.TableMeasure).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableDueDate(objOrArch = 'objectives') {
        if (objOrArch == 'objectives') {
            cy.get(this.elements.TableDueDate).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch == 'archive') {
            cy.get(this.elements.TableDueDate).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableComment(objOrArch = 'objectives') {
        if (objOrArch == 'objectives') {
            cy.get(this.elements.TableComment).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch == 'archive') {
            cy.get(this.elements.TableComment).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableObjString() {
        cy.get(this.elements.TableObjString)
            .should('exist')
            .and('be.visible')
    }
    getTableStatus() {
        cy.get(this.elements.TableStatus)
            .then(($els) => {
                return Cypress.$.makeArray($els).map((el) => el.innerText);
            })
            .then(($arr) => {
                for (let i = 0; i < $arr.length; i++) {
                    expect($arr[i]).to.be.oneOf(['Done', 'Failed']);
                }
            })
    }
    openModal(objOrArch = 'objectives') {
        if (objOrArch == 'objectives') {
            cy.get(this.elements.InfoButton).first().click()
            cy.get(this.elements.InfoModal)
                .should('exist')
                .and('be.visible')
        } else if (objOrArch == 'archive') {
            cy.get(this.elements.InfoButton).last().click()
            cy.get(this.elements.InfoModal)
                .should('exist')
                .and('be.visible')
        }
    }
        closeModalCloseBTN() {
            cy.get(this.elements.InfoModalBTNClose).click()
            cy.get('body')
                .should('not.contain', this.elements.InfoModal)
        }
        closeModalGotBTN() {
            cy.get(this.elements.InfoModalBTNGot).click()
            cy.get('body')
                .should('not.contain', this.elements.InfoModal)
        }
        closeModalSpaсe() {
            cy.get(this.elements.PageBackground).click({force: true})
            cy.get('body')
                .should('not.contain', this.elements.InfoModal)
        }
}
export const objectivesElement = new ObjectivesElements();