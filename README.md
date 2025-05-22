## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Endpoints:

  # request
  GET: `/analyzer`

  # description 
  ``` evaluates trend ```

  # response example
  ```
  {
    "start": 4261.48,
    "end": 110530,
    "change": 2493.699841369665,
    "trend": "increases"
  }
  ```