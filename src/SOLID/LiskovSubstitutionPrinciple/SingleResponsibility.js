export class DateTimeDisplay {
    /**
     * @param {Date} date
     */
    constructor(date) {
        this.date = date;
    }

    /**
     * @return {String}
     */
    greet() {
        // new Date().toLocaleString('en-US', { timeZone: 'Indian/Christmas' })
        return this.date.toLocaleString();
    }
}

export class DateTimeDisplayUK extends GreetUser {
    /**
     * @inheritDoc
     */
    constructor() {
        super();
    }

    /**
     * @return {String}
     */
    greet() {
        return this.date.toLocaleString('en-GB');
    }
}

export class DateTimeDisplayUSA extends GreetUser {
    /**
     * @inheritDoc
     */
    constructor() {
        super();
    }

    /**
     * @return {String}
     */
    greet() {
        return this.date.toLocaleString('en-US');
    }
}
