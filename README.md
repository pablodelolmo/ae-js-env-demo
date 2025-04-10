
# Basic .env app for Fastly Compute + Github Actions

Relevant parts:

- For reading .env and making it work in a Compute app: [Dotenv Webpack](https://www.npmjs.com/package/dotenv-webpack) + Webpack ([see webpack config](https://github.com/pablodelolmo/ae-js-env-demo/blob/main/webpack.config.js))
- [Github action](https://github.com/pablodelolmo/ae-js-env-demo/blob/main/.github/workflows/fastly-publish.yml)
- $SERVICE_ID and $TOKEN are stored as repo secrets, and $VALUE_1 and $VALUE_2 are stored as repo variables.