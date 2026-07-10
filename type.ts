export type Plan = {
    id: string;
    name: string;
    description: string;
    priceOriginal: number;
    priceDiscounted: number;
    featuredReason: string | null
};

export type PlanFeature = {
    id: string;
    feature: string;
};

export interface PlanDetails extends Plan {
    features: PlanFeature[];
}

export type SocialMediaPlatform =
    | "TIKTOK"
    | "WHATSAPP"
    | "FACEBOOK"
    | "INSTAGRAM"
    | "YOUTUBE"
    | "GMAIL";

export type Academy = {
    id: string;
    name: string
    academyPhones: AcademyPhone[];
    addresses: Address[];
    socialMedia: SocialMedia[];
    paymentLinks: PaymentLink[];
};

export type AcademyPhone = {
    id: string;
    phone: string;
    academyId: string;
};

export type Address = {
    id: string;
    address: string;
    academyId: string;
};

export type SocialMedia = {
    id: string;
    platform: SocialMediaPlatform
    url: string;
    academyId: string;
};

export type PaymentLink = {
    id: string;
    url: string;
    phone: string;
    walletProvider: string;
    academyId: string;
};

export interface Area {
    id: string;
    name: string;
    supportType: SupportType
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    statusCode: number;
    data: T;
}

// Customer

export interface ICustomerDetails {
    id: string;
    name: string;
    phone: string;
    subscriptions: ISubscription[];
    academy: IAcademy;
}

export interface ISubscription {
    id: string;
    subscriptionStatus: SubscriptionStatus;
    courseName: string;
    priceAtBooking: number;
    totalSessions: number;
    sessionDurationMinutes: number;
    requiredInitialDeposit: number;
    sessionsBeforeFullPayment: number;
    trainingTypeAtRegistration: SupportType;
    walletMovements: IWalletMovement[];
    lessons: ILesson[];
}

export interface IWalletMovement {
    id: string
    transactionType: TransactionType;
    paymentMethod: PaymentMethod;
    amount: string;
    walletMovementStatus: WalletMovementStatus;
    paymentProofImageId: string | null;
    createdAt: string;
}

export interface ILesson {
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

export interface IAcademy {
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
    | "CUSTOMER_PAYMENT";

export type PaymentMethod =
    | "MONETARY"
    | "ELECTRONIC";

export type WalletMovementStatus =
    | "PENDING"
    | "APPROVED"
    | "REJECTED";

export type LessonStatus =
    | 'SCHEDULED'
    | 'COMPLETED'
    | 'CANCELED'
    | 'CANCELED_CHARGED'

export type SupportType = 'AUTOMATIC' | 'MANUAL' | "BOTH"
