import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AppLoggerMiddleware.name);

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, baseUrl: url, body } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('close', () => {
      const { statusCode, statusMessage, req } = response;
      const contentLength = response.get('content-length');

      delete body.password;
      delete body.confirmPassword;

      const message = {
        method,
        url,
        statusCode,
        statusMessage,
        userAgent,
        ip,
        contentLength,
        body,
        userId: req['user']?.id,
      };

      if (statusCode > 399) {
        this.logger.error(message);
      } else {
        this.logger.log(message);
      }
    });

    next();
  }
}
