import LandingPage from "../../../pages/landing/LandingPage";
import {
    JEST_TIMEOUT
} from "../../../config";

describe('Page:Landing', () => {
    let landingPage;

    beforeAll(async () => {
        jest.setTimeout(JEST_TIMEOUT);
        landingPage = new LandingPage();
    });


    it('should load landing page', async () => {
        await landingPage.visit();
        await landingPage.isVisible();
    });


});