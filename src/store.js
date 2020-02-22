import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'
import { toastMessage } from './ducks/toastMessage'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development' || typeof __DEV__ !== 'undefined') {
    // middleware.push(createLogger({ collapsed: true }))
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const initialState = {}
export const appliedMiddleware = composeEnhancers(applyMiddleware(...middleware))

const combinedReducers = combineReducers({
    toastMessage,
    form,
})

export const store = createStore(combinedReducers, initialState, appliedMiddleware)