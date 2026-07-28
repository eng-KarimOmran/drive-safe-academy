
export type SocialMediaPlatform =
    | "TIKTOK"
    | "WHATSAPP"
    | "FACEBOOK"
    | "INSTAGRAM"
    | "YOUTUBE"
    | "GMAIL";

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
    url?: string;
    phone?: string;
    walletProvider: string;
    academyId: string;
};

export type Academy = {
    id: string;
    name: string
    academyPhones: AcademyPhone[];
    addresses: Address[];
    socialMedia: SocialMedia[];
    paymentLinks: PaymentLink[];
};