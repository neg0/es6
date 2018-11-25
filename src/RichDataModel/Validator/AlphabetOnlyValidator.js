import { ValidatorAbstract } from "./ValidatorAbstract";

export class AlphabetOnlyValidator extends ValidatorAbstract {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();
        this.name = name;
    }

    /**
     * @inheritDoc
     */
    get errorMessage() {
        return this.isValid() ? undefined : "Name is not valid, only alphabet and spaces are allowed";
    }

    /**
     * @inheritDoc
     */
    isValid() {
        return AlphabetOnlyValidator.regex.test(this.name);
    }

    /**
     * @return {string}
     */
    static get regex() {
        return "/^[a-zA-Z-,]+(\\s{0,1}[a-zA-Z-, ])*$/";
    }
}