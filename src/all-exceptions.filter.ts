import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const respObj = this.getResponseMessage(exception, request);
    response.status(respObj.statusCode).json(respObj);
  }

  getResponseMessage = (exception: Error, request: any) => {
    const { name: errorType, message: errorMessage } = exception;

    this.logger.error({
      error: exception.name,
      exception: exception.message,
      stack: exception.stack,
    });

    if (exception instanceof HttpException) {
      const { statusCode, error, message, ...rest }: any =
        exception.getResponse();
      return {
        statusCode: statusCode ?? exception.getStatus() ?? 500,
        path: request.url ?? 'unknown',
        errorType: error || errorType,
        errorMessage: message,
        ...rest,
      };
    }

    switch (exception.constructor.name) {
      case 'StripeInvalidRequestError':
        return {
          statusCode: exception['statusCode'],
          path: request.url ?? 'unknown',
          errorType: 'PaymentRequestError',
          errorMessage,
        };
      case 'AxiosError':
        const { data } = exception['response'] ?? { data: { errorMessage } };
        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        if (
          exception['code'] === 'ECONNABORTED' &&
          errorMessage.includes('timeout')
        ) {
          statusCode = HttpStatus.REQUEST_TIMEOUT;
        }
        return {
          statusCode,
          ...data,
          path: request['originalUrl'] ?? 'unknown',
        };
      default:
        return {
          statusCode:
            exception['statusCode'] ?? HttpStatus.INTERNAL_SERVER_ERROR,
          path: request.url ?? 'unknown',
          errorType,
          errorMessage,
        };
    }
  };
}
