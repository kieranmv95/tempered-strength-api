import { AllowAnonymous } from '@app/auth/decorators/allow-anonymous.decorator';
import { STRIPE_SIGNATURE } from '@app/stripe/stripe.module';
import { WebhooksService } from '@app/webhooks/webhooks.service';
import {
  BadRequestException,
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@AllowAnonymous()
@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post('/stripe')
  @HttpCode(HttpStatus.OK)
  async stripeUpdate(@Headers() headers, @Request() { rawBody }) {
    const stripeSignature = headers[STRIPE_SIGNATURE];

    if (!stripeSignature) {
      throw new BadRequestException();
    }
    await this.webhooksService.handleStripeUpdate(stripeSignature, rawBody);
  }
}
