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

export type SupportType = 'AUTOMATIC' | 'MANUAL' | "BOTH"

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