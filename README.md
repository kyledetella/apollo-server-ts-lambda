# Apollo Server Typescript

Apollo Server written in Typescript, deployed to AWS Lambda.

This follows [this guide](https://www.apollographql.com/docs/apollo-server/deployment/lambda.html) but is written in Typescript and built using [ncc](https://github.com/zeit/ncc).

## Development

### Install dependencies

```bash
nvm use && npm i
```

### Testing locally

This project uses [serverless-offline](https://github.com/dherault/serverless-offline) to emulate API Gateway and Lambda functionality.

```bash
$ npm start
```

The GraphQL API will then be available at http://localhost:4444/graphql.

## Deployment

```bash
AWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY_ID> \
AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY> \
npm run deploy
```
