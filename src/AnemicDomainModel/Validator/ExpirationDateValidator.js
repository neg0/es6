import { ValidatorAbstract } from "./ValidatorAbstract";

export class ExpirationDateValidator extends ValidatorAbstract {
    /**
     * @param {Date} date
     */
    constructor(date) {
        super();
        this.date = date;
    }

    /**
     * @inheritDoc
     */
    get errorMessage() {
        return this.isValid() ? undefined : "Expiration date can not be less than a day in the future";
    }

    /**
     * @inheritDoc
     */
    isValid() {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + ExpirationDateValidator.ONE_DAY);

        return this.date >= new Date(tomorrow);
    }

    static get ONE_DAY() {
        return 1;
    }
}
