const axios = require('axios')

const testSubmission = async (submissionUrl) => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3000/check',
    data: {
      submissionUrl
    }
  })
  const data = res.data
  return data
}

const submissionUrls = [
  'https://www.getpostman.com/collections/10d2dddd919babaa7576',
  'https://www.getpostman.com/collections/d5b27cb2cb02d288e330',
  'https://www.getpostman.com/collections/d52acb19f7856f5d964b',
  'https://www.getpostman.com/collections/399e34af57e3adae63e8',
  'https://www.getpostman.com/collections/db51e933164af9b873d4'
]

const pluck = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

let testUrls = []

const NUM_OF_URLS = 100

for (i = 0; i < NUM_OF_URLS; i++) {
  testUrls.push(pluck(submissionUrls))
}
console.log({ testUrls })
;(async () => {
  const promises = testUrls.map((url) => testSubmission(url))
  const result = await Promise.allSettled(promises)

  console.log(result)
})()
