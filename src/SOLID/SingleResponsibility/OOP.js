export class Validator {
    constructor(date, coupon) {
        this.date = date;
        this.coupon = coupon;
    }

    isInRange() {
        return this.coupon.length > 0;
    }

    isInDatabase() {
    }
}