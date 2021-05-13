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
        PageBackground: 'div.cdk-overlay-backdrop.cdk-overlay-dark-backdrop.cdk-overlay-backdrop-showing',
        ObjectiveModal: 'div[class="objectives-modal-wrapper"]',
        ModalOpenBTN: 'button[class="mat-button"]',
        ModalCloseBTN: 'button[class="objectives-modal-close"]',
        DoneModal:'div[class="wrapper"]',
        DoneCloseBTN:'button[class="modal-close"]',
        DoneNumb: 'div[class="hint-message margin0 ng-star-inserted"]'
    }
    getTableTitle(objOrArch = 'objectives') {
        if (objOrArch === 'objectives') {
            cy.get(this.elements.TableTitle).first()
                .should('have.text', 'Objectives')
        } else if (objOrArch === 'archive') {
            cy.get(this.elements.TableTitle).last()
                .should('have.text', 'Archive')
        }

    }
    getInfoButton(objOrArch = 'objectives') {
        if (objOrArch === 'objectives') {
            cy.get(this.elements.InfoButton).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch === 'archive') {
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
        if (objOrArch === 'objectives') {
            cy.get(this.elements.TableObjective).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch === 'archive') {
            cy.get(this.elements.TableObjective).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableType(objOrArch = 'objectives') {
        if (objOrArch === 'objectives') {
            cy.get(this.elements.TableType).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch === 'archive') {
            cy.get(this.elements.TableType).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableMeasure(objOrArch = 'objectives') {
        if (objOrArch === 'objectives') {
            cy.get(this.elements.TableMeasure).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch === 'archive') {
            cy.get(this.elements.TableMeasure).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableDueDate(objOrArch = 'objectives') {
        if (objOrArch === 'objectives') {
            cy.get(this.elements.TableDueDate).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch === 'archive') {
            cy.get(this.elements.TableDueDate).last()
                .should('exist')
                .and('be.visible')
        }
    }
    getTableComment(objOrArch = 'objectives') {
        if (objOrArch === 'objectives') {
            cy.get(this.elements.TableComment).first()
                .should('exist')
                .and('be.visible')
        } else if (objOrArch === 'archive') {
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
        if (objOrArch === 'objectives') {
            cy.get(this.elements.InfoButton).first().click()
            cy.get(this.elements.InfoModal)
                .should('exist')
                .and('be.visible')
        } else if (objOrArch === 'archive') {
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
    closeModalSpace() {
            cy.get(this.elements.PageBackground).click({force: true})
            cy.get('body')
                .should('not.contain', this.elements.InfoModal)
        }
    openObjectiveModalClick(objOrArch) {
            if (objOrArch === 'objectives') {
                cy.get('tr[class="mat-row ng-star-inserted"]').first().click()
                cy.get(this.elements.ObjectiveModal)
                    .should('exist')
                    .and('be.visible')
            } else if (objOrArch === 'archive') {
                cy.get('tr[class="mat-row ng-star-inserted"]').last().click()
                cy.get(this.elements.ObjectiveModal)
                    .should('exist')
                    .and('be.visible')
            }
        }
    openObjectiveModalOpen() {
            cy.get(this.elements.ModalOpenBTN).first().click({force: true})
            cy.get('button').contains('Open').click({force: true})
            cy.get(this.elements.ObjectiveModal)
                .should('exist')
                .and('be.visible')
        }
    closeObjectiveModalSpace() {
            cy.get(this.elements.PageBackground).click({force: true})
            cy.get('body')
                .should('not.contain', this.elements.ObjectiveModal)
        }
    closeObjectiveModalClose() {
        cy.get(this.elements.ModalCloseBTN).click()
        cy.get('body')
            .should('not.contain', this.elements.ObjectiveModal)
    }
    openObjMenu(){
        cy.get(this.elements.ModalOpenBTN).first().click({force: true})
    }
    ObjMenuCheck() {
        cy.get('button').contains('Open')
            .should('exist')
            .and('be.visible')
        cy.get('button').contains('Edit')
            .should('exist')
            .and('be.visible')
        cy.get('button').contains('Done')
            .should('exist')
            .and('be.visible')
        cy.get('button').contains('Failed')
            .should('exist')
            .and('be.visible')
    }
    ObjModalDoneCheck() {
        cy.get('button').contains('Done').click({force: true})
        cy.get(this.elements.DoneCloseBTN)
            .should('exist')
            .and('be.visible')
        cy.get('textarea[class]')
            .should('exist')
            .and('be.visible')
        cy.get(this.elements.DoneNumb)
            .should('exist')
            .and('be.visible')
        cy.get('button').contains('Complete')
            .should('exist')
            .and('be.visible')
    }
    closeDoneModal() {
        cy.get(this.elements.DoneCloseBTN).click()
        cy.get('body')
            .should('not.contain', this.elements.DoneModal)
    }
    ObjModalEditCheck() {
        cy.get('button').contains('Edit').click({force: true})
        cy.get('textarea[class="form-input cdk-textarea-autosize mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"]').first()
            .should('exist')
            .and('be.visible')
            .clear()
            .type('Changed Test objective')
        cy.get('textarea[class="form-input cdk-textarea-autosize mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"]').eq(1)
            .should('exist')
            .and('be.visible')
            .clear()
            .type('Changed Test measure')
        cy.get('mat-select[class]')
            .should('exist')
            .and('be.visible')
            .click()
        cy.get('span[class="mat-option-text"]').contains(' Management ').click()
        cy.get('input[class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"]')
            .should('exist')
            .and('be.visible')
        // cy.get('')
        cy.get('textarea[class="form-input cdk-textarea-autosize mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"]').last()
            .should('exist')
            .and('be.visible')
            .clear()
            .type('Changed Test comment')
        cy.get('button').contains(' Cancel ')
            .should('exist')
            .and('be.visible')
        cy.get('button').contains(' Save ')
            .should('exist')
            .and('be.visible')
    }
    ObjModalEditCancel(){
        cy.get('button').contains('Cancel').click()
        cy.get('div[class="confirm-title"]').contains('Cancel editing objective?')
        cy.get('button').contains('Yes')
            .should('exist')
            .and('be.visible')
        cy.get('button').contains('No')
            .should('exist')
            .and('be.visible')
    }
    closeEditModal(){
        cy.get('button').contains('Yes').click()
        cy.get('body')
            .should('not.contain', 'andteam-confirm-modal')
    }
}
export const objectivesElement = new ObjectivesElements();