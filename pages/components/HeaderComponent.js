import {
    shouldExist
} from '../../lib/helpers';
export default class HeaderComponent {

    static CONTENT = "#NoowuHeader";

    async isVisible() {
        await shouldExist(page, HeaderComponent.CONTENT);
    }

}