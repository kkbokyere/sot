# Sports On Tap Tech Test
## Introduction

The front-end code for the Sports On Tap test app. Built in [React](https://reactjs.org/).

## Requirements

- [Node v18](https://nodejs.org/en/).
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

# Issues
- When send my initial start message to the websocket, it's not consistent in sending back any match updates so its initially difficult to capture any real match updates
- How do I know when to stop the match

# Improvements / Retrospective Review

- Would have used Cypress for E2E testing
- 100% test coverage
- create a better Error handler
- implement typescript to better type definitions
- better memoization of redux state and react components to stop constant re rendering (useCallback / useMemo)
