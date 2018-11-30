import { Name } from "./Common/Name";
import { Email } from "./Common/Email";
import { ExpirationDate } from "./Common/ExpirationDate";
import { Status } from "./Common/Status";
import { Subscription } from "./Model/Subscription";

export class SubscriptionCreation extends DataTransferCreationInterface {
    /**
     * @param {number} id
     * @param {string} name
     * @param {string} email
     * @param {Date} expirationDate
     * @param {string} status
     */
    constructor(id, name, email, expirationDate, status) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.expirationDate = expirationDate;
        this.status = status
    }

    create() {
        return new Subscription(
            this.id,
            new Name(this.name),
            new Email(this.email),
            new ExpirationDate(this.expirationDate),
            new Status(this.expirationDate)
        );
    }
}
