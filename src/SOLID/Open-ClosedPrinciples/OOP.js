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