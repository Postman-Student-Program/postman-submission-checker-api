import { Request, Response } from 'express'

export const getStatus = (_req: Request, res: Response) => {
  res.send('OK')
}
