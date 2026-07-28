export type SupportType = "BOTH" | "AUTOMATIC" | "MANUAL";

export interface IUser {
    id: string;
    name: string;
    phone: string;
}

export interface Trainer {
    id: string;
    supportType: SupportType;
    user: IUser;
}