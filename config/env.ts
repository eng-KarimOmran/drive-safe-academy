const isDevelopment = process.env.NODE_ENV === "development"

export const env = {
    API_URL: isDevelopment ? process.env.NEXT_PUBLIC_API_URL_DEVELOPER : process.env.NEXT_PUBLIC_API_URL,
    NODE_ENV: process.env.NODE_ENV,
}