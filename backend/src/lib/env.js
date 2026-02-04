import dotenv from 'dotenv'

dotenv.config({quiet: true})

export const ENV = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DB_URL: process.env.DB_URL,
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGN_IN_KEY: process.env.INNGEST_SIGN_IN_KEY,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET,
    CLIENT_URL: process.env.CLIENT_URL
}