## Postman Submission Checker API

No more cheating on tests! An API template for running server-side tests on variable collections.

This is useful for instances where you don't want the client to alter the client-side tests and "cheat" their way into a badge.

The template is set up to accomodate one endpoint by default, but you can easily add additional endpoints if you want to manage multiple different tests from the same server.

Built with Claire's [no-bs-ts-starter](https://github.com/clairefro/my-no-bs-ts-express-starter)

### How to use

#### Create a test collection in Postman

This collection should use GET `{{submissionUrl}}` (by default - or you can change this variable name in `config.ts`) as the request URL. `{{submissionUrl}}` is dynamically populated as a Posmtan environment variable by the API when running the tests in `newman`. The request in the Postman collection should run some tests against the JSON response from `{{submissionUrl}}`.

Here is an example test, used for student expert submission checking: [example](https://postman.postman.co/workspace/Training-Processing~f20c42fd-3898-4fe3-977a-eb953781cff1/request/15567703-36eb6066-6aa4-4994-b9bf-0829bd88c80b)

#### Configure

Specific which Postman collection will be used to run the tests by pasting the JSON url for the end var `TEST_COLLECTION_URL`.

#### Deploy

Host on Heroku or Glitch, etc.

#### Hit API

Hit the API `/check` with the `submissionUrl`.

If the submission passes all the tests, the API will return a response like below

```json
{
  "allTestsPassed": true
}
```

If any tests fail, a response like below will be returned

```json
{
  "allTestsPassed": false,
  "failures": [{
      "test": "Name of failed test",
      "message: "Some message about the failure reason"
   }]
}
```

### For developers

#### Install

`yarn install`

#### Run dev server

`yarn start`

#### Build + serve

`yarn build && yarn serve`
