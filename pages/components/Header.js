export default class Header {

    CONTENT = "#NoowuHeader";

    async isVisible() {
        await shouldExist(page, this.CONTENT);
    }

}