import { createStore } from 'redux'

const fakeReducer = (state, action) => ({ foo: 'bar' })

// Return the devToolsExtension object, if it exists.
// See https://github.com/zalmoxisus/redux-devtools-extension
const getDevTools = () => {
    const useDevTools = (typeof window === 'object') &&
                        (typeof window.devToolsExtension === 'function')
    return useDevTools ? window.devToolsExtension() : undefined
}

const configureStore = (initialState = {}) => {
    return createStore(fakeReducer, initialState, getDevTools())
}

export default configureStore
