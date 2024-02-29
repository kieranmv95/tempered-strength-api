import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HealthExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const environment = process.env.NODE_ENV ?? 'undefined';
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const exceptionResponse = {
      environment,
      ...(exception.getResponse() as object),
    };
    response.status(HttpStatus.OK).json(exceptionResponse);
  }
}
