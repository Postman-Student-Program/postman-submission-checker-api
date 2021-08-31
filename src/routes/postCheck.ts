import { NextFunction, Request, Response } from 'express'
import { fetchCollection } from '../utils/fetchCollection'

export const postCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // fetch submission json
  let submission
  try {
    submission = await fetchCollection(
      'https://www.getpostman.com/collections/d9336ce4708a5df54a5cfoo'
    )
  } catch (err) {
    // if something goes wrong, send 404 or 500
    if (err.response.status === 404) {
      const error = new Error('Collection not found') as any
      error.status = 404
      next(error)
    } else {
      next(new Error())
    }
  }

  res.send(submission)
  // test submission
  // if something blows up with newman, throw 500
  // if newman processes ok, send 200 with test results
}
