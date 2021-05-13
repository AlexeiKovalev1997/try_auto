import {objectivesElement} from '/cypress/support/page_objects/ObjectOfObjectives';
import {login} from '/cypress/support/page_objects/Login';
import {objectivesMethod} from '/cypress/support/page_objects/MainPagePO';

describe("Открытие цели для редактирования", () => {
    before(() => {
        login.loginPortal()
        objectivesMethod.toSubObjectivesPage()
    });
    it("Открытие цели для редактирования", () => {
        objectivesElement.openObjMenu()
        objectivesElement.ObjMenuCheck()
        objectivesElement.ObjModalEditCheck()
        objectivesElement.ObjModalEditCancel()
        objectivesElement.closeEditModal()
    });
});