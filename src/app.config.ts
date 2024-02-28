import * as process from 'process';

export const jwt_config = 'jwt';
export const stripe_config = 'stripe';
export const cache_config = 'cache';

export interface JwtConfig {
  secret: string;
  expiration: string;
  refreshTokenSecret: string;
  refreshTokenExpiration: string;
  resetPasswordTokenSecret: string;
  resetPasswordTokenExpiration: string;
  emailInvitationTokenExpiration: string;
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

export default () => ({
  [jwt_config]: {
    secret: process.env.JWT_SECRET,
    expiration: process.env.JWT_EXPIRATION || '60m',
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    refreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION || '15d',
    resetPasswordTokenSecret: process.env.JWT_RESET_PASSWORD_TOKEN_SECRET,
    resetPasswordTokenExpiration:
      process.env.JWT_RESET_PASSWORD_TOKEN_EXPIRATION || '30m',
    emailInvitationTokenExpiration:
      process.env.JWT_EMAIL_INVITATION_TOKEN_EXPIRATION || '7d',
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
});
