# Thales Machine-Learning-Robot

[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://ai.scify.org/courses/decision-trees/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/scify)
[![Vue Deploy to GitHub Pages](https://github.com/scify/Machine-Learning-Decision-Trees-Robot/actions/workflows/vue-deploy-github-pages.yml/badge.svg?branch=master&event=push)](https://github.com/scify/Machine-Learning-Decision-Trees-Robot/actions/workflows/vue-deploy-github-pages.yml)

This is a playground for Machine Learning.
It visualises a simple example in which the user is prompted to enrich the training set of a Decision Tree algorithm.

A demo (in English and Greek) can be found [here](https://go.scify.gr/teach-thalis-the-robot).

This project uses the [decision-tree-js](https://github.com/lagodiuk/decision-tree-js) library.

All dataset images are royalty-free and were taken from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/).

<div>Icons made by <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## Pre-setup steps

Make sure the right NodeJS and npm versions are installed:

```bash
nvm install lts/fermium # (or nvm install v14.21.1)

node -v
v14.21.1

npm -v
6.14.17
```

## Project setup
```
npm install

cp .env.example .env
```

## Compiles and hot-reloads for development
```
npm run serve
```

## Compiles and minifies for production
```
npm run build
```

## Run your tests
```
npm run test
```

## Lints and fixes files
```
npm run lint
```

## Deploy to GitHub Pages

```bash
chmod +x deploy.sh

./deploy.sh
```