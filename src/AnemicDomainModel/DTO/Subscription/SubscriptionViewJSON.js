export class SubscriptionViewJSON {
    constructor(Subscription subscription) {
        this.subscription = subscription;
    }

    view() {
        return {
            id: this.subscription.id,
            name: this.subscription.name.value,
            email: this.subscription.email.value,
            expiration: this.subscription.expirationDate.value.toLocaleDateString(),
            status:this.subscription.status.value,
        };
    }
}
