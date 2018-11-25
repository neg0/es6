import { ValueObjectInterface } from "./ValueObjectInterface";
import { ExpirationDateValidator } from "../Validator/ExpirationDateValidator";

export class ExpirationDate extends ValueObjectInterface {
    /**
     * @param {Date} date
     */
    constructor(date) {
        super();

        if (false === date instanceof Date) {
            throw new Error("Wrong type");
        }

        const expirationDateValidator = new ExpirationDateValidator(date);
        if (true !== expirationDateValidator.isValid()) {
            throw new Error(expirationDateValidator.errorMessage);
        }

        this._value = date;
    }

    /**
     * @inheritDoc
     */
    get value() {
        return this._value;
    }
}
