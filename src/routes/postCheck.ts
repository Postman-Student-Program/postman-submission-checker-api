import { NextFunction, Request, Response } from 'express'
import { testCollection } from '../utils/testCollection'
import { fetchCollection } from '../utils/fetchCollection'

export const postCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // fetch submission json
  //   let submission
  //   try {
  //     submission = await fetchCollection(
  //       'https://www.getpostman.com/collections/99b0087818b9038e1bc2'
  //     )
  //   } catch (err) {
  //     // if something goes wrong, send 404 or 500
  //     if (err.response.status === 404) {
  //       const error = new Error('Collection not found') as any
  //       error.status = 404
  //       return next(error)
  //     } else {
  //       return next(new Error())
  //     }
  //   }

  // test submission
  const testResults = await testCollection({
    testCollectionUrl:
      'https://www.getpostman.com/collections/c114ebe1517d1d471053',
    // submissionCollectionUrl:
    //   'https://www.getpostman.com/collections/99b0087818b9038e1bc2'
    submissionCollectionUrl: req.body.submissionUrl
  })

  res.send(testResults)
  // if something blows up with newman, throw 500
  // if newman processes ok, send 200 with test results
}
