# Apollo Server Typescript

Apollo Server written in Typescript, deployed to AWS Lambda.

This follows [this guide](https://www.apollographql.com/docs/apollo-server/deployment/lambda.html) but is written in Typescript and built using [ncc](https://github.com/zeit/ncc).

## Development

### Install dependencies

```bash
nvm use && npm i
```

## Deployment

```bash
AWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY_ID> \
AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY> \
npm run deploy
```
