export type ProgramBase = {
    id: string;
    name: string;
    description: string;
    priceOriginal: number;
    priceDiscounted: number;
    featuredReason: string | null
};

export type ProgramFeature = {
    id: string;
    feature: string;
};

export interface Program extends ProgramBase {
    features: ProgramFeature[];
}