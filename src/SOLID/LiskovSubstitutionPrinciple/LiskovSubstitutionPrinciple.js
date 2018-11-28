export class DateTime {
    /**
     * @param {Date} date
     * @param {String} countryCode
     */
    constructor(date, countryCode) {
        this.date = date;
        this.countryCode = countryCode;
    }

    /**
     * @return {String}
     */
    greet() {
        // new Date().toLocaleString('en-US', { timeZone: 'Indian/Christmas' })
        return this.date.toUTCString();
    }

    /**
     * @return {String}
     */
    getLocale() {
        return 'en-' + this.countryCode;
    }
}

export class DateTimeDisplay extends DateTime {
    /**
     * @param {Date} date
     * @param {String} countryCode
     */
    constructor(date, countryCode) {
        super(date, countryCode);
    }

    /**
     * @return {String}
     */
    greetUK() {
        return this.date.toLocaleString(this.getLocale() + this.countryCode);
    }

    /**
     * @return {String}
     */
    greetUS() {
        return this.date.toLocaleString(this.getLocale() + this.countryCode);
    }
}
