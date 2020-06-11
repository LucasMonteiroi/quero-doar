import * as httpStatus from 'http-status-codes';
import { Response } from 'express';

export function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16).toUpperCase();
  });
}

export function responseJson(
  res: Response,
  data: any,
  statusCode = httpStatus.OK
) {
  res.status(statusCode);
  return res.json(data);
}

export function responseErrorJson(
  res: Response,
  error: any,
  statusCode = httpStatus.INTERNAL_SERVER_ERROR
) {
  res.status(error.httpCode || statusCode);
  return res.json({
    error: error.message || error.toString(),
  });
}
