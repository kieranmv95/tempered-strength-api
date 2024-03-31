import * as process from 'process';

export const jwt_config = 'jwt';
export const stripe_config = 'stripe';
export const cache_config = 'cache';
export const db_config = 'db';

export interface JwtConfig {
  secret: string;
  clerkIssuerUrl: string;
}

export interface StripeConfig {
  secretKey: string;
  customerWebhookSecret: string;
  defaultTrialDays: number;
}
export interface CacheConfig {
  ttl: number;
  maxItems: number;
}

export interface DbConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
}

export default () => ({
  [jwt_config]: {
    secret: process.env.JWT_SECRET,
    clerkIssuerUrl: process.env.JWT_CLERK_ISSUER_URL,
  },
  [stripe_config]: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    customerWebhookSecret: process.env.STRIPE_CUSTOMER_WEBHOOK_SECRET,
    defaultTrialDays: parseInt(process.env.STRIPE_PRODUCT_TRIAL_DAYS) || 0,
  },
  [cache_config]: {
    ttl: process.env.CACHE_TTL,
    maxItems: process.env.CACHE_MAX_ITEMS,
  },
  [db_config]: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
});
