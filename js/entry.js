import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const rootEl = document.querySelector('.app')
const $ = React.createElement

render($(AppContainer, null, $(App)), rootEl)


if (module.hot) {
    module.hot.accept('./app', function() {
        render($(AppContainer, null, $(App)), rootEl)
    })
}
