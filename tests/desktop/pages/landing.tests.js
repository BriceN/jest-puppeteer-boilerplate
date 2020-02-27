import LandingPage from "../../../pages/landing/LandingPage";

describe('Landing page tests', () => {
    let landingPage;

    beforeAll(async () => {
        landingPage = new LandingPage();
    });


    it('should load landing page', async () => {
        await landingPage.visit();
        await landingPage.isVisible();
    });


});