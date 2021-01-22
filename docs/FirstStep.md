# First step

## Convert class components to function components

### Introduction

[Class component](https://reactjs.org/docs/react-component.html) is an outdated and heavy syntax used to describe a React component. It is based on [ES6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

At [Pepperbay](Pepperbay) we use [function components](https://reactjs.org/docs/components-and-props.html), because the syntax is clearer and more concise and it allows us to use [React _Hooks_](https://reactjs.org/docs/hooks-intro.html), introduced in React 16.8.

### Todo

To succeed in this step, you will have to convert all class components contained in `./src/Component` & `./src/App.js` with some constraints.

#### Constraints

These constraints must be used every day in each of your developments.

##### Be lazy

Do only what you are asked to do. No more. Do not try to predict futur features, keep a code base simple and clean.

##### Dependency free (almost)

Do not add any dependencies to the project. All the ones you will need are already installed.
Each additional dependency represents more and more kilobytes in production bundle, so always try to create feature yourself before including a new one.

Resources:

- [BundlePhobia](https://bundlephobia.com/result?p=lodash@4.17.20): Describes the size and composition of a dependency
- [3 Minutes with Kent · Concerning Libraries and Frameworks: Build or Install](https://www.briefs.fm/3-minutes-with-kent/144)

##### Do not make any mutations

Never. Mutations are bad. Mutations are the Devil.

Mutations introduce side-effects, and that is the last thing we want. Keep in mind that there is always a way to avoid mutations.

Based on this observation, everything (99.99999%) you are going to define (variables and functions) must be an [ES6 `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).
