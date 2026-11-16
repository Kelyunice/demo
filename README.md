# GitHub Actions Practice Demo

A small Node.js and Express project created to learn and demonstrate GitHub Actions, CI/CD automation, and secure development practices.

## Overview

This repository is a simple DevOps demo application that shows how a basic app can be validated with automated workflows. It includes:

- a lightweight Express web service
- automated tests using Node's built-in test runner
- GitHub Actions workflows for CI
- multi-version and multi-platform test execution
- dependency caching
- CodeQL security scanning

## Project structure

- `app.js` - Express application entry point
- `package.json` - project metadata and scripts
- `package-lock.json` - dependency lock file
- `.github/workflows/ci.yml` - CI pipeline configuration

## Application behavior

The application exposes a simple root endpoint:

- `GET /` returns: `Welcome to our DevOps demo application!`

This makes it easy to verify the app is running correctly during local testing and CI checks.

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 18 or later
- npm

## Getting started

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
node app.js
```

Then open the browser at:

```text
http://localhost:3000
```

### Run the tests

```bash
npm test
```

## CI/CD workflow summary

The repository includes a GitHub Actions pipeline in `.github/workflows/ci.yml` that performs the following:

### 1. Matrix test job
- runs on Ubuntu and Windows
- tests Node.js versions 18, 20, and 22
- checks out the repository
- installs dependencies
- runs the test suite

### 2. Build and security job
- runs on Ubuntu
- sets up Node.js 24
- initializes GitHub CodeQL for JavaScript/TypeScript
- caches npm dependencies
- installs dependencies
- executes a build step
- runs tests again
- performs security analysis
- simulates deployment

## Purpose of the project

This project is intended as a learning example for:

- understanding GitHub Actions workflows
- testing software across multiple operating systems and Node versions
- using dependency cache to speed up builds
- integrating security scanning into CI
- practicing a complete but simple software delivery pipeline

## Notes

This is a demo project for practice and experimentation. It is not intended as a production-ready application or deployment setup.
