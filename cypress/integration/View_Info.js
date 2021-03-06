import {objectivesElement} from '/cypress/support/page_objects/ObjectOfObjectives';
import {login} from '/cypress/support/page_objects/Login';
import {objectivesMethod} from '/cypress/support/page_objects/MainPagePO';

describe("Просмотр справочной информацию oб активных и архивных целях", () => {
    before(() => {
        login.loginPortal()
        objectivesMethod.toObjectivesPage()
    });
    it("Элементы таблиц", () => {
        //Objectives
        objectivesElement.getTableTitle('objectives')
        objectivesElement.getInfoButton('objectives')
        // objectivesElement.getObjectivesData() !!!почему?
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
        //Модалка в Obj
        objectivesElement.openModal('objectives')
        objectivesElement.closeModalGotBTN()
        //Модалка в Arch
        objectivesElement.openModal('archive')
        objectivesElement.closeModalCloseBTN()
        objectivesElement.openModal('archive')
        objectivesElement.closeModalSpace()
    });
});