export class ValidatorAbstract {
    /**
     * @return {string}
     */
    get errorMessage() {
        throw new Error("`errorMessage` property is not implemented");
    }

    /**
     * @return {boolean}
     */
    isValid() {
        throw new Error("`isValid()` method is not implemented");
    }
}
