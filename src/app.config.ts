import * as process from 'process';

export const jwt_config = 'jwt';
export const stripe_config = 'stripe';
export const cache_config = 'cache';
export const mongodb_config = 'mongodb';

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

export interface MongoDbConfig {
  username: string;
  password: string;
  dbName: string;
  uri: string;
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
  [mongodb_config]: {
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    dbName: process.env.MONGO_DB_NAME,
    uri: process.env.MONGO_URI,
  },
});
