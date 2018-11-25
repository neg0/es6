// Functional
export const Validator = (date, coupon) => {
    return coupon.length > 0 &&
        date > new Date();
};

import *  as using from '@negative0/jasmine-dataprovider';

using({}, (data, descr) => {

});

// Refactored according to OOP
export class Validator {
    /**
     * @param {Date} date
     * @param {Object} coupon
     */
    constructor(date, coupon) {
        this.date = date;
        this.coupon = coupon;
    }

    /**
     * @return {boolean}
     */
    validate() {
        return this.coupon.length > 0 &&
            this.date > new Date();
    }
}




// Refactored According to SOLID (Single Responsibility)
export class DateRangeValidator {
    /**
     * @param {Date} date
     */
    constructor(date) {
        this.date = date;
    }

    /**
     * @returns {boolean}
     */
    isInRange() {
        return this.date > new Date();
    }
}

export class ExistenceValidator {
    /**
     * @param {Object} coupon
     */
    constructor(coupon) {
        this.coupon = coupon;
    }

    /**
     * @returns {boolean}
     */
    isInDatabase() {
        return this.coupon.length > 0;
    }
}

export class CouponValidation {
    /**
     * @param {DateRangeValidator|ExistenceValidator} validator
     */
    constructor(validator) {
        this.validator = validator;
    }

    /**
     * @returns {boolean}
     * @throws Error
     */
    validate() {
        if (this.validator instanceof DateRangeValidator) {
            return this.validator.isInRange();
        } else if (this.validator instanceof ExistenceValidator) {
            return this.validator.isInDatabase();
        }

        throw new Error('Invalid validator');
    }
}

// Usage
new CouponValidation(new ExistenceValidator([{id: 1}, {id: 2}])).validate();
new CouponValidation(new DateRangeValidator(new Date())).validate();





// Refactored according to SOLID (Open-Closed Principle)
export class ValidatorInterface {
    /**
     * @return {boolean}
     */
    isValid();
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