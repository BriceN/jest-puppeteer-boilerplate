import Header from "../../../pages/components/Header";


describe('Landing page tests', () => {
    let header;

    beforeAll(async () => {
        header = new Header;
    });


    it('should load header', async () => {
        await header.isVisible();
    });


});