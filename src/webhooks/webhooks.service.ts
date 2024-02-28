import { StripeConfig, stripe_config } from '@app/app.config';
import { STRIPE_CLIENT } from '@app/stripe/stripe.module';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class WebhooksService {
  private stripeConfig: StripeConfig;
  private logger = new Logger(WebhooksService.name);

  constructor(
    @Inject(STRIPE_CLIENT)
    private readonly stripe: Stripe,
    readonly configService: ConfigService,
  ) {
    this.stripeConfig = configService.get<StripeConfig>(stripe_config);
  }

  async handleStripeUpdate(stripeSignature: string, payload: any) {
    const { type, data } = await this.stripe.webhooks.constructEventAsync(
      payload,
      stripeSignature,
      this.stripeConfig.customerWebhookSecret,
    );

    switch (type) {
      case 'setup_intent.created':
        break;

      case 'invoice.paid':
        break;

      case 'checkout.session.completed':
        break;
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        break;
      default:
        break;
    }
  }
}
