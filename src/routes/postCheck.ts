import { NextFunction, Request, Response } from 'express'
import { testCollection } from '../utils/testCollection'
// import { fetchCollection } from '../utils/fetchCollection'

export const postCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { submissionUrl } = req.body

  // check that submission json exists, return send 404 or 500 if something goes wrong
  // try {
  //   await fetchCollection(submissionUrl)
  // } catch (err) {
  //   if (err.response.status === 404) {
  //     const error = new Error('Collection not found') as any
  //     error.status = 404
  //     return next(error)
  //   } else {
  //     return next(new Error())
  //   }
  // }

  console.log({ collectionurl: process.env.TEST_COLLECTION_URL })

  // test submission
  const testResults = await testCollection({
    testCollectionUrl:
      'https://www.getpostman.com/collections/c114ebe1517d1d471053', // TODO: set in env var
    submissionCollectionUrl: submissionUrl
  })

  res.send(testResults)
  // TODO if something blows up with newman, throw 500
}
