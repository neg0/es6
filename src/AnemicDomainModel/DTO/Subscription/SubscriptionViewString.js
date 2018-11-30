export class SubscriptionViewString extends DataTransferViewInterface {
    constructor(Subscription subscription) {
        super();
        this.subscription = new SubscriptionViewJSON(subscription);
    }

    view() {
        return JSON.stringify(this.subscription.view());
    }
}
