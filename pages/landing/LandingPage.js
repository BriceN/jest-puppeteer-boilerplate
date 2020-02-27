import BasePage from "../../BasePage";
import {
    loadUrl
} from '../../../lib/helpers';
import {
    BASE_URL
} from '../../config';

export default class LandingPage extends BasePage {

    CONTENT = '#landing';

    async visit() {
        await loadUrl(page, BASE_URL);
    }

    async isVisible() {
        await shouldExist(page, this.CONTENT);
    }


}