## Postman Submission Checker API

No more cheating on tests! An API template for running server-side tests on variable collections.

This is useful for instances where you need to test multiple collections against the same test script, and you don't want the client to alter client-side tests and "cheat" their way into passing.

The template is set up to accomodate one endpoint by default, but you can easily add additional endpoints if you want to manage multiple different tests from the same server.

Built with Claire's [no-bs-ts-starter](https://github.com/clairefro/my-no-bs-ts-express-starter)

### How to use

#### Create a test collection in Postman

This collection should use GET `{{submissionUrl}}` (by default - or you can change this variable name in `config.ts`) as the request URL. `{{submissionUrl}}` is dynamically populated as a Posmtan environment variable by the API when running the tests in `newman`. The request in the Postman collection should run some tests against the JSON response from `{{submissionUrl}}`.

Here is an example test, used for student expert submission checking: [example](https://postman.postman.co/workspace/Training-Processing~f20c42fd-3898-4fe3-977a-eb953781cff1/request/15567703-36eb6066-6aa4-4994-b9bf-0829bd88c80b)

#### Get Test collection JSON URL

In Postman, get a link to a JSON representation of the collection: "Share collection" > "via JSON"

> Note: Whenever you edit the test collection, be share to visit the above dialog and click "Update" for changes to be reflected in the URL.

#### Configure API

Specify which Postman collection will be used to run the tests by pasting the JSON url for the end var `TEST_COLLECTION_URL`.

#### Deploy

Set up necessary env vars (`TEST_COLLECTION_URL`).

In order to start the server run: 

`yarn build && yarn serve`

This compiles the TypeScript, copies the schema.yaml file (used to validate requests), and starts the node server.

#### Hit API

Hit the API `/check` with the body `{ submissionUrl: <submission URL> }`.

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
  "failures": [
    {
      "test": "Name of failed test",
      "message": "Some message about the failure reason"
    }
  ]
}
```

### Allowing multiple or dynamic test collection URLs

The template as-is hard codes one test collection as an environemnt variable on the server. 

There are a few options for extending on this to allow multiple test collections:

**Add endpoints**

You could define additional environment variables (ex: `TEST_COLLECTION_URL_FOO`, `TEST_COLLECTION_URL_BAR`, `TEST_COLLECTION_URL_BAZ`), and make dedicated endpoints for each test (ex: `/check/foo`, `check/bar`, `check/baz`)

This solution is ideal if you are making client-side API calls and want to make sure the client cannot alter the test collection URLs.

**Define test collection URL in request body**

If you would rather allow the test collection URL to be dynamic and defined on request, feel free to remove the `TEST_COLLECTION_URL` checks in `index.ts`, and add `testCollectionUrl` as another expected property on the request body for the `/check` endpoint and in the `schema.yaml` spec.

This solution is ideal if you a) are making server-side API calls (test collection URLs cannot be altered by client), and/or b) you want to be able to specifify the test collection URL(s) without re-deploying the server code.

### For developers

#### Node version

This project uses `node` v `16.0.0`. Use a node version manager such as [`n`](https://www.npmjs.com/package/n) to develop with this version.

#### Install

`yarn install`

#### Run dev server

`yarn start`

#### Build + serve

`yarn build && yarn serve`

#### Student Expert training checker - Deployment

If you are a developer with permissions on the Student Expert Submission checker server, you can add this remote to git like so:

`git remote add heroku https://git.heroku.com/pm-student-expert-checker.git`

Then you can deploy changes by pushing to `main` in the heroku repo:

```
git add .
git commit -m "your commit message"

git push heroku main
```

If you have the [Heroku CLI tool](https://devcenter.heroku.com/articles/heroku-cli), you can check the server logs:
`heroku logs`
