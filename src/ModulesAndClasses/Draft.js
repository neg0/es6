export class User {
    constructor(uuid, name, email) {
        this.uuid = uuid;
        this.name = name;
        this.email = email;
    }

    toJSON() {
        return {
            id: this.uuid,
            name: this.name,
            email: this.email,
        };
    }
}
