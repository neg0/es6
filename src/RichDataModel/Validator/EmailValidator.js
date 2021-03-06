import { ValidatorAbstract } from "./ValidatorAbstract";

export class EmailValidator extends ValidatorAbstract {
    /**
     * @param {string} email
     */
    constructor(email) {
        super();
        this.email = email;
    }

    /**
     * @inheritDoc
     */
    isValid() {
        return new RegExp(EmailValidator.regex).test(this.email);
    }

    /**
     * @inheritDoc
     */
    get errorMessage() {
        return this.isValid() ? undefined : "Email address is not valid";
    }

    /**
     * @return {string}
     */
    static get regex() {
        return '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    }
}
