export class ValidatorInterface {
    /**
     * @return {boolean}
     */
    isValid() {
        throw new Error('isValid() is not implemented');
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

export class CouponValidation {
    /**
     * @param {ValidatorInterface} validator
     */
    constructor(validator) {
        this.validator = validator;
    }

    /**
     * @returns {boolean}
     */
    validate() {
        return this.validator.isValid();
    }
}

// Usage
new CouponValidation(new ExistenceValidator([{id: 1}, {id: 2}])).validate();
new CouponValidation(new DateRangeValidator(new Date())).validate();