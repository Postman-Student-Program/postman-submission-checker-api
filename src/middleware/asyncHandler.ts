import { Request, Response, NextFunction, RequestHandler } from 'express'

/** Handles any rejected promises by passing into error handling middleware */
export const asyncHandler =
  (cb: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(cb(req, res, next)).catch(next)
  }
