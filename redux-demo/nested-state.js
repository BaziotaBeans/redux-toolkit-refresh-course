const redux = require("redux");
const produce = require('immer').produce;


// Step 1 - Create the state
const initialState = {
    name: 'Vishwas',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
}

// STEP 2 - Define the action name
const STREET_UPDATED = 'STREET_UPDATED'

// STEP 3 - Define the action method
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}
// STEP 4 - Define the reducer to handle this action


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
        //     return {
        //        ...state,
        //         address: {
        //            ...state.address,
        //             street: action.payload,
        //         }
        //     }
        
        // the first argument is the current state
        // the second is the function which receives a draft copy of the state
        return produce(state, (draft) => {
            draft.address.street = action.payload; 
        })
        default:
            return state
    }
}

// STEP 5 - We define and create the store to dispatch this reducer

const store = redux.createStore(reducer)
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
})
store.dispatch(updateStreet('456 Main St'))
unsubscribe()