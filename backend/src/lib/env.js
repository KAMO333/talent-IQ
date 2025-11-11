import dotenv from 'dotenv'

dotenv.config()

export const ENV = {
    PORT: process.env.PORT,
    // add more environment variables as needed
}