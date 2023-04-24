# Sports On Tap Tech Test
## Introduction

The front-end code for the Sports On Tap test app. Built in [React](https://reactjs.org/).

## Requirements

- [Node](https://nodejs.org/en/).
- [npm](https://www.npmjs.com/package/npm).

## Getting Started

**1. Clone Git Repo.**

```
$ git clone git@bitbucket.org:kkbokyere/sot.git
```

**2. Install Dependencies.**

Once that's all done, cd into the app directory and install the depedencies:

```
$ cd sot/app
$ yarn install
```

**3. Run Application.**

Once the node modules have all been installed and npm has done it's thing, that's it. To open up a local development environment, run:

```
$ yarn start
```

Once the server is up and running, navigate to [localhost:3000](http://localhost:3000).

## Testing

[Jest](https://jestjs.io/) is the test runner used, with [React Testing Library](https://testing-library.com/docs/react-testing-library/) is testing library used for testing components. To run test use the following command:

```
$ yarn test
```

## Deployment

No CI/CD pipeline at the moment.

# Tools Used

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Redux](https://redux.js.org)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [CSS Modules](https://github.com/css-modules/css-modules)

# Architecture

Everything about my approach, is forward thinking towards scaling this application.

## State Management vs UI
- The idea is to simply think about a high level separation of concern. If Redux was to become obsolete, or we decided to use a different state management library, the 'state' folder can simple be updated to accommodate this. And it can be come in small incremental pieces.

## Ducks
- I wanted to create a certain level of separation of concern, without having to over engineer.
- The solution I decided to use was the [Ducks](https://github.com/erikras/ducks-modular-redux) concept, but in a more scalable way which essentially allowed me to bundle reducers, actions and action types.

# Improvements / Retrospective Review

- Would have used Cypress for E2E testing
- 100% test coverage
- create a better Error handler
- implement typescript to better type definitions
- Would have considered creating a proper [SMACSS](http://smacss.com/) architecture for base CSS styles such as layout.
- better memoization of redux state and react components to stop constant re rendering (useCallback / useMemo)
- Would only mad data which is relevant
