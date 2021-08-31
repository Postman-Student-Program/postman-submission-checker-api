import { Request, Response, NextFunction } from 'express'

const defaultServerErrorMsg = 'Internal server error'

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
    message: err.message || defaultServerErrorMsg,
    errors: err.errors
  })
}

export { handleErrors }
