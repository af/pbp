import React from 'react'
import { Provider } from 'react-redux'
import classes from './app.styl'
import { Icon } from './icons'
import storeFactory from './store'

const $ = React.createElement
const store = storeFactory()

const App = () => {
    return $(Provider, { store },
        $('div', { className: classes.msg },
            $(Icon, { name: 'arrow' }),
            $('span', { onClick: () => store.dispatch({ type: 'HI' }) },
                'say hello.'
            )
        )
    )
}

export default App
