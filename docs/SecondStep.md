# Second step

## Migrate local state in `Redux`

> Run `git checkout second-step` before continuing to read.

### Introduction

##### What is `Redux` ?

Redux is a library that allows to manage the global state of our application, and to separate our business logic (state update logic, the reducers) from the rest of our application.

![Redux lifecycle](./images/redux-lifecycle.gif)

_**Figure 1:** `Redux` lifecycle (source: [Redux. From twitter hype to production](https://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/9))_

In the figure above, you can identify three main components:

- **Actions**: JS objects that describe what we want to change in our state and how (the new data)
- **Store**: composed of two other main components:
  - **Reducers**: Pure functions that take an existing state as a parameter and produce a new one (no mutation)
  - **States**: Data models which allow single source of truth
- **Views**: The UI of our application, which consumes state data and dispatches actions

If you're new with `Redux` and want to know more, please read [Redux FAQ](https://redux.js.org/faq).

##### Why still choose Redux (or an other global state management tool) in 2021?

The debate comes from `Redux` vs `Context`.

[`Context`](https://reactjs.org/docs/context.html) is a new API introduced in `React` v16.3, which allows to passing down data to nested components.

Many developers believe that `Redux` can be replaced by `Context` API. Yes, this is possible if we use `Redux` to avoid passing down props.

But `Redux` comes with many other things:

- A clear & safe lifecycle
- The ability to trace when, where, why and how our state has changed
- The possibility of centralizing the logic of the application
- A lot of middleware to properly manage side-effects
- Wonderful dev tools

### Todo

To succeed in this step, you will have to migrate all local state using `useState()` hook, to `Redux` states.

##### Dependencies

First of all, run `yarn` to install the new dependencies we had for you (it's the last time we'll get the job for you!!):

- [`react-redux`](https://react-redux.js.org/): The official implementation of `Redux` for `React`
- [`@reduxjs/toolkit`](https://redux-toolkit.js.org/): The official toolbox for efficient `Redux` development. As the documentation says: it _"is intended to be the standard way to write Redux logic"_ (please, [read the documentation](https://redux-toolkit.js.org/introduction/quick-start), it is really incredible!!)

##### Store

You can find a new file & a new directory:

- [./src/Store.js](../src/Store.js): Our `Redux` store implementation & configuration
- [./src/State](../src/State): Where you will put all the states

You can also see that we have added a store provider in the [entry point of our app](../src/index.js), to make this store available to our component tree.

We advise you to install _Redux DevTools_ browser extension:

- [Firefox](https://addons.mozilla.org/firefox/addon/reduxdevtools/)
- [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

##### Constraints

- No mutations are allowed
- Create one [_slice_](https://redux-toolkit.js.org/api/createSlice) state by challenge component
- All your reducers must be tested
- All existing tests must remain green without any modification
- Use an entity adapter to process data in the state of Challenge Six component

##### Example

Imagine that we have a component that greets us:

```jsx
// ./src/Component/Hello.js
import { useDispatch, useSelector } from 'react-redux'
import * as MyState from '../State/MyState'

const Hello = () => {
  const dispatch = useDispatch()
  const name = useSelector(MyState.select.name)

  const handleChange = e => {
    e.preventDefault()
    dispatch(MyState.changeName(e.target.value))
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello {name}!</p>
    </div>
  )
}

export default Hello
```

It will use a state defined using `Redux Toolkit` (one time again, [read the doc](https://redux-toolkit.js.org/usage/usage-guide), it is really well-done) like this:

```js
// ./src/State/MyState.js
import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_STATE = { name: '' }

const slice = createSlice({
  name: 'myState',
  initialState: INITIAL_STATE,
  reducers: {
    changeName: (state, { payload: name }) => ({
      ...state,
      name,
    }),
  },
})

export const { reducer } = slice
export const { changeName } = slice.actions
export const select = {
  name: state => state.myState.name,
}
```

The state will be tested like this:

```js
// ./src/State/MyState.test.js
import * as MyState from './MyState.js'

test(`
  it reduces to the initial state
  when no action is specified
`, () => {
  const state = MyState.reducer(undefined, {})

  expect(state).toBeEqual(MyState.INITIAL_STATE)
})

test(`
  it reduces the changeName action
`, () => {
  const action = MyState.changeName('Antonin')
  const state = MyState.reducer({ name: 'Bernanos' }, action)

  expect(state).toBeEqual({ name: 'Antonin' })
})
```
