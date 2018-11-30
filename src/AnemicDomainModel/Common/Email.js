import { ValueObjectInterface } from "./ValueObjectInterface";
import { EmailValidator } from "../Validator/EmailValidator";

export class Email extends ValueObjectInterface {
    /**
     * @param {string} emailAddress
     */
    constructor(emailAddress) {
        super();

        const emailValidator = new EmailValidator(emailAddress);
        if (true !== emailValidator.isValid()) {
            throw new Error(emailValidator.errorMessage);
        }

        this._value = emailAddress;
    }

    /**
     * @inheritDoc
     */
    get value() {
        return this._value;
    }
}