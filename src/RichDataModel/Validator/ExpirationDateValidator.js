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
        return this.date <= new Date("+1 day");
    }
}
