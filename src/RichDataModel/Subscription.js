import { Name } from './Common/Name';
import { Email } from './Common/Email';
import { ExpirationDate } from "./Common/ExpirationDate";

export class Subscription {
    /**
     * @param {number} id
     * @param {Name} name
     * @param {Email} email
     * @param {ExpirationDate} expirationDate
     */
    constructor(id, name, email, expirationDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.expirationDate = expirationDate;
    }

    /**
     * @param {number} id
     * @param {string} name
     * @param {string} email
     * @param {Date} expirationDate
     * @return {Subscription}
     */
    static create(id, name, email, expirationDate) {
        return new Subscription(
            id,
            new Name(name),
            new Email(email),
            new ExpirationDate(expirationDate)
        );
    }

    /**
     * @return {{
     *  id: number,
     *  name: string,
     *  email: string,
     *  expiration: string
     * }}
     */
    toJSON() {
        return {
            id: this.id,
            name: this.name.value,
            email: this.email.value,
            expiration: this.expirationDate.value.toLocaleDateString(),
        };
    }

    /**
     * @return {string}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
