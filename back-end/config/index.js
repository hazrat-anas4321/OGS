import dotenv from 'dotenv';
dotenv.config();
export const {
    STATUS,
    DEV_PORT,
    PROD_PORT,
    DEBUG_MODE,
    JWT_SECRET,
    APP_URL,
    VALID_MODE,
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASSWORD

} = process.env;