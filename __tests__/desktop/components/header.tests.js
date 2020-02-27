import HeaderComponent from "../../../pages/components/HeaderComponent";
import LandingPage from "../../../pages/landing/LandingPage";
import {
    JEST_TIMEOUT
} from "../../../config";

describe('Component:Header', () => {
    let header;
    let landingPage;

    beforeAll(async () => {
        jest.setTimeout(JEST_TIMEOUT);
        header = new HeaderComponent;
        landingPage = new LandingPage;
    });


    it('should load header on landing page', async () => {
        await landingPage.visit();
        await header.isVisible();
    });


});