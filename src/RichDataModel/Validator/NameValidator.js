import { ValidatorAbstract } from "./ValidatorAbstract";
import { AlphabetOnlyValidator } from "./AlphabetOnlyValidator";

export class NameValidator extends ValidatorAbstract {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();
        this.name = name;
        this.alphabetValidator = new AlphabetOnlyValidator(name);
    }

    /**
     * @inheritDoc
     */
    get errorMessage() {
        return this.isValid() ? undefined : this._error;
    }

    /**
     * @inheritDoc
     */
    isValid() {
        if (true !== this.alphabetValidator.isValid()) {
            this._error = this.alphabetValidator.errorMessage;
        }

        if (this.name.length < 2) {
            this._error = "Does not minimum length requirement";
        }

        if (this.name.length > 32) {
            this._error = "Exceeds maximum length of name";
        }

        return !this._error;
    }
}
