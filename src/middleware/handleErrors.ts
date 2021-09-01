import { Request, Response, NextFunction } from 'express'

const DEFAULT_ERROR_MESSAGE = 'Internal server error'

/** apply error handler to catch any errors passed to next() */
const handleErrors = (
  // eslint-disable-next-line
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err)
  res.status(err.status || 500).send({
    status: 'error',
    message: err.message || DEFAULT_ERROR_MESSAGE,
    errors: err.errors
  })
}

export { handleErrors }
