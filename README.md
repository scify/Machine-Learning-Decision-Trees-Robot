# Thales Machine-Learning-Robot

[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://ai.scify.org/courses/decision-trees/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/scify)
[![Vue Deploy to GitHub Pages](https://github.com/scify/Machine-Learning-Decision-Trees-Robot/actions/workflows/vue-deploy-github-pages.yml/badge.svg?branch=master&event=push)](https://github.com/scify/Machine-Learning-Decision-Trees-Robot/actions/workflows/vue-deploy-github-pages.yml)

## Table of Contents

- [About](#about)
- [Pre-setup steps](#pre-setup-steps)
- [Project setup](#project-setup)
- [Compile and hot-reload for development](#compile-and-hot-reload-for-development)
- [Compile and minify for production](#compile-and-minify-for-production)
- [Run your tests](#run-your-tests)
- [Lints and fixes files](#lints-and-fixes-files)
- [Beautify files](#beautify-files)
- [Deploy to GitHub Pages](#deploy-to-github-pages)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contributing](#contributing)
- [Changelog](#changelog)

## About

This is a playground for Machine Learning.
It visualises a simple example in which the user is prompted to enrich the training set of a Decision Tree algorithm.

A demo (in English and Greek) can be found [here](https://go.scify.gr/teach-thalis-the-robot).

This project uses the [decision-tree-js](https://github.com/lagodiuk/decision-tree-js) library.

All dataset images are royalty-free and were taken from [Pexels](https://www.pexels.com/)
and [Unsplash](https://unsplash.com/).

<div>Icons made by <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## Pre-setup steps

It is very easy to install multiple versions of `NodeJS` and `npm`, by
using [Node Version Manager (nvm)](https://github.com/creationix/nvm).

Make sure the right `NodeJS` and `npm` versions are installed:

```bash
nvm install lts/fermium # (or nvm install v14.21.1)

node -v
v20.13.1

npm -v
10.17.0
```

Alternatively, if you are using [`nvm`](https://github.com/nvm-sh/nvm), run this command in order to sync to the
correct `NodeJS` version for the project:

```bash
nvm use
```

## Project setup

Install the npm dependencies:

```bash
npm install
```

Create the local `.env` file:

```bash
cp .env.example .env
```

## Compile and hot-reload for development

```bash
npm run serve
```

## Compile and minify for production

```bash
npm run build
```

## Run your tests

```bash
npm run test
```

## Lints and fixes files

```bash
npm run lint
```

## Beautify files

```bash
npm run format
```

## Deploy to GitHub Pages

This application is deployed to GitHub Pages using the Deploy to GitHub Pages GitHub Action.

This action is triggered by a push to the `master` branch, and is defined in
the `.github/workflows/vue-deploy-github-pages.yml` file.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [decision-tree-js](https://github.com/lagodiuk/decision-tree-js)
- [Pexels](https://www.pexels.com/)
- [Unsplash](https://unsplash.com/)
- [Flaticon](https://www.flaticon.com/)
- [Vue.js](https://vuejs.org/)

## Contributing

To contribute to this application, follow these steps:

1. Fork this repository.
2. Read the [CONTRIBUTING](CONTRIBUTING.md) file.
3. Create a branch: `git checkout -b <branch_name>`.
4. Make your changes and commit them: `git commit -m '<commit_message>'`
5. Push to the original branch: `git push origin <project_name>/<location>`
6. Create the pull request.


## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.