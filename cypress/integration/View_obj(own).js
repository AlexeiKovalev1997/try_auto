import {objectivesElement} from '/cypress/support/page_objects/ObjectOfObjectives';
import {login} from '/cypress/support/page_objects/Login';
import {objectivesMethod} from '/cypress/support/page_objects/MainPagePO';

describe("Просмотр вкладки \"Objectives\" в личной карточке сотрудника", () => {
    before(() => {
        login.loginPortal()
        objectivesMethod.toObjectivesPage()
    });
    it("Элементы таблиц", () => {
        objectivesElement.getTableTitle('objectives')
        objectivesElement.getInfoButton('objectives')
        // objectivesElement.getObjectivesData() !!!поему?
        objectivesElement.getTableObjective('objectives')
        objectivesElement.getTableType('objectives')
        objectivesElement.getTableMeasure('objectives')
        objectivesElement.getTableDueDate('objectives')
        objectivesElement.getTableComment('objectives')
        objectivesElement.getTableObjString()
        //Archive
        objectivesElement.getTableTitle('archive')
        objectivesElement.getInfoButton('archive')
        objectivesElement.getTableObjective('archive')
        objectivesElement.getTableType('archive')
        objectivesElement.getTableMeasure('archive')
        objectivesElement.getTableDueDate('archive')
        objectivesElement.getTableComment('archive')
        objectivesElement.getTableStatus()
        //Modals
        // objectivesElement.openObjectiveModalClick('objectives')
        // objectivesElement.closeObjectiveModalSpace()
        // objectivesElement.openObjectiveModalClick('archive')
        // objectivesElement.closeObjectiveModalSpace()
        objectivesElement.openObjectiveModalClick('archive')
        objectivesElement.closeObjectiveModalClose()
        objectivesElement.openObjectiveModalOpen()
        objectivesElement.closeObjectiveModalSpace()
    });
});