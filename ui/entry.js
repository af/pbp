import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'
import storeFactory from './store'

const rootEl = document.querySelector('.app')
const $ = React.createElement
const store = storeFactory()

render($(AppContainer, null, $(App, { store })), rootEl)


if (module.hot) {
    module.hot.accept('./app', function() {
        render($(AppContainer, null, $(App, { store })), rootEl)
    })
}
