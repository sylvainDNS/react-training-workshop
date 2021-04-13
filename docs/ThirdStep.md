# Third step

## Manage side-effects with `Redux-Saga`

> Run `git checkout third-step` before continuing to read.

### Introduction

##### Effects management

As we saw in the previous step ([Migrate local state in `Redux`](./SecondStep.md)), Redux is a toolbox that comes with a lifecycle that allow you to separate each part of the application according to its concerns ([SOC](https://en.wikipedia.org/wiki/Separation_of_concerns)).

Currently, we can see in our little app two main parts:

- Our view, located in the [`Component`](../src/Component) folder
- The state of our application, with methods (reducers & selectors) to interact with it, located in the [`State`](../src/State) folder

But if we look into the [`Animes`](../src/Component/Animes.js) component, we can see that the View part is communicates directly with an external part of our application: a rest API.  
The response of the API cannot be predicted, because many external side effects can occur :

- Server error
- Poor network quality
- ...

According to the Separation Of Concerns, we want the View to handle ONLY user interface and user interactions.  
We will therefore create a new part in our application to manage all communications with an external element (browser, localstorage, HTTP requests, ...): the Effect part.

##### Go further in `Redux` lifecycle

In the figure below, you can see that the diagram previously seen in the second step has evolved:

![Redux lifecycle with middlewares management](./images/redux-lifecycle-middleware.gif)
_**Figure 2:** `Redux` lifecycle with middleware management (source: [Redux. From twitter hype to production](https://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/27))_

Redux allows the use of addons which are called middleware. According to the [official documentation](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware):

> Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

Thanks to this powerful feature, we can imagine using it to create custom logging, or communicate with an external API.

##### What is `Redux-Saga` ?

`Redux-Saga` is a `Redux` middleware that allows us to manage asynchronous calls with a clear and simple API (called _effects_), and to organize them in sequences (called _sagas_).

_Effects_ are functions provided by the library that introduce useful functionalities:

- Parallelization
- Race between calls
- Cancelling process
- ...

_Sagas_ use a declarative syntax based on [ES6 generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator), so all _effects_ will be `yield`.

Generators make it easy to test sagas, step by step, without any mock.

I really recommend you to consult the [documentation](https://redux-saga.js.org/) which is very complete.

### Todo

- Install & configure [`redux-saga`](https://redux-saga.js.org/) as explain in the documentation
- Create your first saga and remove api call in [`src/Component/Animes.js`](../src/Component/Animes.js)

##### Example

You can see an example on https://redux-saga.js.org/ landing page.
