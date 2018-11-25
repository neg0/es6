export class ValidatorInterface {
    /**
     * @return {boolean}
     * @throws {Error}
     */
    isValid() {
        throw new Error("isValid not implemented");
    }
}

export class DateRangeValidator extends ValidatorInterface {
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
    isValid() {
        return this.date > new Date();
    }
}

export class ExistenceValidator extends ValidatorInterface {
    /**
     * @param {Object} coupon
     */
    constructor(coupon) {
        super();
        this.coupon = coupon;
    }

    /**
     * @inheritDoc
     */
    isValid() {
        return this.coupon.length > 0;
    }
}