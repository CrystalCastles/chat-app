import { DocumentData, DocumentReference, Timestamp } from "firebase-admin/firestore";
import Stripe from "stripe";

export interface Subscription {
    id: string;
    metadata: {
        [name: string]: string
    };
    stripeLink: string;
    role: string | null;
    quantity: number;
    items: Stripe.SubscriptionItem[];
    product: DocumentReference<DocumentData>;
    price: DocumentReference<DocumentData>;
    prices: Array<DocumentReference<DocumentData>>;
    payment_method:string;
    latest_invoice: string;
    status:
    | "incomplete"
    | "incomplete_expired"
    | "trialing"
    | "active"
    | "past_due"
    | "canceled"
    | "unpaid";

    cancel_at_period_end: boolean;
    created: Timestamp;
    current_period_end: Timestamp;
    current_period_start: Timestamp;
    ended_at: Timestamp;
    cancel_at: Timestamp;
    canceled_at: Timestamp;
    trial_start: Timestamp;
    trial_end: Timestamp;
}