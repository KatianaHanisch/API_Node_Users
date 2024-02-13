import { HttpResponse, HttpStatusCode } from "./protocols";

export const ok = <T>(body: any): HttpResponse<T> => ({
  statusCode: HttpStatusCode.OK,
  body: body,
});

export const created = <T>(body: any): HttpResponse<T> => ({
  statusCode: HttpStatusCode.CREATED,
  body: body,
});

export const badRequest = (message: string): HttpResponse<string> => ({
  statusCode: HttpStatusCode.BAD_REQUEST,
  body: message,
});

export const serverError = (message: string): HttpResponse<string> => ({
  statusCode: HttpStatusCode.SERVER_ERROR,
  body: message,
});
