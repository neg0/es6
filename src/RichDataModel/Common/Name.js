import { ValueObjectInterface } from "./ValueObjectInterface";
import { NameValidator } from "../Validator/NameValidator";

export class Name extends ValueObjectInterface {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();

        if ('string' !== typeof name) {
            throw new Error('Wrong type');
        }

        const nameValidator = new NameValidator(name);
        if (true !== nameValidator.isValid()) {
            throw new Error(nameValidator.errorMessage);
        }

        this._value = name;
    }

    /**
     * @inheritDoc
     */
    get value() {
        return this._value;
    }
}
