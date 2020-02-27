import BasePage from "../BasePage";
import {
    loadUrl,
    shouldExist
} from '../../lib/helpers';
import {
    BASE_URL
} from '../../config';

export default class LandingPage extends BasePage {

    static CONTENT = '#landing';

    async visit() {
        await loadUrl(page, BASE_URL);
    }

    async isVisible() {
        await shouldExist(page, LandingPage.CONTENT);
    }


}