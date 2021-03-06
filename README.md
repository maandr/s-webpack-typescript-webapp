# Webpack Typescript Web-Application starter

This repository contains a starter project prepared and configured to use `webpack` and `typescript` to develop a web application.

[![Build Status](https://travis-ci.org/maandr/s-webpack-typescript-webapp.svg?branch=master)](https://travis-ci.org/maandr/s-webpack-typescript-webapp)
[![Coverage Status](https://coveralls.io/repos/github/maandr/s-webpack-typescript-webapp/badge.svg?branch=master)](https://coveralls.io/github/maandr/s-webpack-typescript-webapp?branch=master)

## Usage

There are several npm scripts pre-configured that can be used for convenience.

```bash
# Install project dependencies
yarn install

# Refresh dependencies (remove and re-install)
yarn refresh

# Removes all generated project files
yarn clean

# Runs the project tests
yarn test

# Runs the project tests in watch-mode
yarn test --watch

# Runs the project tests and provides code-coverage information
yarn test:coverage

# Build the project
yarn build

# Start the project
yarn start

# Start the project in development mode (with HMR enabled)
yarn dev
```

## Docker utilities

### Build the project as docker-image

The script infers the image name from `name` in `package.json`.
It tags the image with the `version` that is configured in `package.json`.

```bash
yarn docker-build
```

### Start the project as docker-container

The script names the container with the `docker-container-name` that is configured in `package.json`.

```bash
yarn docker-up
```

### Stop and remove the project docker-container

The script takes the container name  from the `docker-container-name` that is configured in `package.json`.

```bash
yarn docker-down
```

### Pushes the project docker-image

The script pushes the docker-image either to the `docker-registry` which is configured in `package.json` or to DockerHub as the `docker-user` that is configured in `package.json`.
It will tag the image with without version, with the `version` configured in `package.json` and with **latest**.

```bash
yarn docker-push
```

## Further Setup

### Code coverage

In order to send code-coverage reports after local coverage runs to [coverall.io](https://coverall.io), a `.coveralls.yml` file needs to be created within the root directory of the project. In this file the access token for the coveralls repository must be specified. The token can be obtained from [coverall.io](https://coverall.io) website.

```yml
repo_token: <your_repo_token>
```