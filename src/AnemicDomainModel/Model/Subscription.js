import { Name } from "./Common/Name";
import { Email } from "./Common/Email";
import { ExpirationDate } from "./Common/ExpirationDate";
import { Status } from "./Common/Status";

export class Subscription {
    /**
     * @param {number} id
     * @param {Name} name
     * @param {Email} email
     * @param {ExpirationDate} expirationDate
     * @param {Status} status
     */
    constructor(id, name, email, expirationDate, status) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._expirationDate = expirationDate;
        this._status = status
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get expirationDate() {
        return this._expirationDate;
    }

    set expirationDate(date) {
        this._expirationDate = date;
    }

    get status() {
        return this._status;
    }

    set status() {
        this._status = status;
    }
}
