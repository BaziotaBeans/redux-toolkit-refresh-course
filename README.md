Why Redux Tookit?

Redux is great, but it does have a few shortcomings(deficiências)

- Configuring redux in app seems complicated
- In addition to redux, a lot of other packages have to be installed to get redux to do something useful
- Redux requires too much boilerplate code

Redux toolkit servers as an abstraction over redux. It hides the difficult parts ensuring you have a good developer experience.

Redux Toolkit featuring React

Redux or Redux toolkit don't need a UI library to work

RTK + React

React <----> React-Redux <----> Redux (Redux Toolkit)

Course Structure

- Learn Redux first
- Learn Redux Toolkit second
- Learn Redux Toolkit third

Prerequisites

- React Fundamentals
- React Hooks

[] Three Core Concepts

- Cake Shop

  - Entities
    - Shop - Stores cakes on a shelf(Armazena bolos em uma prateleira)
    - Shopkeeper(Lojista) - Behind the counter(Atrás do balcão)
    - Customer - At the store entrance(Na entrada da loja)

  Activities
  Customer - Order a cake (Encomende um bolo)
  Shopkeeper - Box a cake from the shelf (Empacote um bolo da prateleira) - Recept to keep track (Receba para acompanhar)

Cake Shop Scenario | Redux |

| Cake Shop Scenario |  Redux  |               Purpose               |
| :----------------: | :-----: | :---------------------------------: |
|        Shop        |  Store  | Holds the state of your application |
|    Cake ordered    | Action  |       Describes what happened       |
|     Shopkeeper     | Reducer | Ties the store and actions together |

A store that holds the state of your application
An action that describes what happened in the application
A reducer which handles the action and decides how to update the state

- Three Principles

  - First Principle
    "The global state of your application is stored as an object inside a single store"
    Maintain our application state in a single object which would be managed by the redux store

    Cake Shop
    Let's assume we are tracking the number of cakes on the shelf
    {
    numberOfCakes: 10
    }

  - Second Principle
    "The only way to change the state is to dispatch an action, an object that describes what happened"

    To update the state of your app, you need to let Redux know about that with an action
    Not allowed to directly update the state object

    Cake shop
    Scan the QR code and place an order - CAKE_ORDERED

    {
    type: 'CAKE_ORDERED'
    }

  - Third Principle
    "To specify how the state tree is updated based on actions, you write pure reducers"

    Reducer - (previousState, action) => newState

    Cake Shop

    Reducer is the shopkeeper

    ```
    const reducer = (state - initialState, action) => {
        switch (action.type) {
            case CASE_ORDERED:
                return {
                    numOfCakes: state.numOfCakes - 1
                }
        }
    }
    ```

    - Overview
        [Redux Store (State)] -> [Javascript App] ---- dispatch ----> [Action] --- handle action ---> [Reducer] 
        [Reducer] ---> [Redux Store (State)]

    - Actions
        - The only way your application can interact with the store 
        - Carry some information from your app to the redux store
        - Plain javascript objects
        - Have a `type` property that describes something that happened in the application.
        - The `type` property is typically defined as string constants
    
    - Reducers
        - Specify how the app's state changes in response to actions sent to the store.

        - Function that accepts state and action as arguments, and returns the next state of the application

        (previousState, action) => newState

    - Redux Store
        One store for the entire application

        Responsibilities -
            - Holds application state
            - Allows access to state via getState()
            - Allows state to be updated via dispatch(action)
            - Registers listeners via subscribe(listener)
            - Handles unregistering of listeners via the function returned by subscribe(listener)

        - Payload - the info u want to send
                                                                
- Middleware 

is the suggested way to extend Redux with custom functionality 

Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer

Use middleware for logging, crash reporting performing asynchronous tasks etc.

- Actions
    - Synchronous Actions  
        - As soon as an action was dispatched, the state was immediately updated.
        - if you dispatch the CAKE_ORDERED action, the numOfCakes was right away decremented by 1.
        - Same with ICECREAM_ORDERED action as well.

    - Async Actions
        - Asynchronous API calls to fetch data from an end point use that data in your application.
    
    - Async action creators
      - axios
      - redux-thunk
        - Define async action creators
        - Middleware

- Redux concerns
  - Redux requires too much boilerplate code
    - Action, action object, action creator, switch statement in a reducer
  - A lot of other packages have to be installed to work with redux
    - Redux-thunk
    - Immer
    - Redux-devtools
  - There was a need to improve the developer experience for redux

- Redux Toolkit
  - Redux toolkit is the official, opinionated, batteries-included toolset for efficient Redux development
    - Abstract over the setup process
    - Handle the most common use cases
    - Include some useful utilities