import { SupportType } from "@/type/type";

export interface Academy {
    name: string;
    academyRules: {
        id: string
        content: string;
    }[];
}

export type SubscriptionStatus =
    | "PENDING_DEPOSIT"
    | "PENDING_FIRST_SESSION"
    | "GRACE_PERIOD"
    | "SUSPENDED"
    | "ACTIVE"
    | "CANCELED"
    | "COMPLETED"
    | "FULLY_BOOKED"

export type TransactionType =
    | "SUBSCRIPTION_CREATED"
    | "CUSTOMER_PAYMENT" | "CUSTOMER_REFUND"

export type PaymentMethod =
    | "MONETARY"
    | "ELECTRONIC";

export type WalletMovementStatus =
    | "PENDING"
    | "APPROVED"
    | "REJECTED";

export interface WalletMovement {
    id: string
    transactionType: TransactionType;
    paymentMethod: PaymentMethod;
    amount: string;
    walletMovementStatus: WalletMovementStatus;
    paymentProofImageId: string | null;
    createdAt: string;
}

export type LessonStatus =
    | 'SCHEDULED'
    | 'COMPLETED'
    | 'CANCELED'
    | 'CANCELED_CHARGED'

export interface Lesson {
    id: string;
    startTime: string;
    endTime: string;
    lessonStatus: LessonStatus;
    sessionDurationMinutes: number;
    expectedPaymentAmount: number;
    transmission: SupportType
    jobProfile: {
        user: {
            name: string;
            phone: string;
        }
    }
}

export interface Subscription {
    id: string;
    subscriptionStatus: SubscriptionStatus;
    courseName: string;
    priceAtBooking: number;
    totalSessions: number;
    sessionDurationMinutes: number;
    trainingTypeAtRegistration: SupportType;
    walletMovements: WalletMovement[];
    lessons: Lesson[];
}

export interface CustomerDetails {
    id: string;
    name: string;
    phone: string;
    subscriptions: Subscription[];
    academy: Academy;
}