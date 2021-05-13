import {objectivesElement} from '/cypress/support/page_objects/ObjectOfObjectives';
import {login} from '/cypress/support/page_objects/Login';
import {objectivesMethod} from '/cypress/support/page_objects/MainPagePO';

describe("Закрытие окна \"Objective done\"", () => {
    before(() => {
        login.loginPortal()
        objectivesMethod.toSubObjectivesPage()
    });
    it("Закрытие окна \"Objective done\"", () => {
        objectivesElement.openObjMenu()
        objectivesElement.ObjMenuCheck()
        objectivesElement.ObjModalDoneCheck()
        objectivesElement.closeDoneModal()
    });
});