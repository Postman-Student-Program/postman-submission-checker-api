import { Request, Response } from 'express'

export const getStatus = (req: Request, res: Response) => {
  res.send('OK')
}
