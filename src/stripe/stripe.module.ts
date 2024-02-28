import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { Stripe } from 'stripe';

export const STRIPE_CLIENT = 'STRIPE_CLIENT';
export const STRIPE_SIGNATURE = 'stripe-signature';

@Global()
@Module({})
export class StripeModule {
  static forRoot(
    secretKey: string,
    config: Stripe.StripeConfig,
  ): DynamicModule {
    const stripe = new Stripe(secretKey, config);

    const stripeProvider: Provider = {
      provide: STRIPE_CLIENT,
      useValue: stripe,
    };

    return {
      module: StripeModule,
      providers: [stripeProvider],
      exports: [stripeProvider],
    };
  }

  static forRootAsync(options: StripeModuleAsyncOptions): DynamicModule {
    const stripeProvider: Provider = {
      provide: STRIPE_CLIENT,
      inject: options.inject ?? [],
      useFactory: async (...args: any[]) => {
        const { secretKey, stripeConfig } = await options.useFactory(...args);

        return new Stripe(secretKey, stripeConfig);
      },
    };

    return {
      module: StripeModule,
      providers: [stripeProvider],
      exports: [stripeProvider],
    };
  }
}

export interface StripeModuleFactoryOptions {
  secretKey: string;
  stripeConfig: Stripe.StripeConfig;
}

export interface StripeModuleAsyncOptions {
  inject?: any[];
  useFactory: (
    ...args: any[]
  ) => StripeModuleFactoryOptions | Promise<StripeModuleFactoryOptions>;
}
