import React from 'react'
import { Provider } from 'react-redux'
import classes from './app.styl'
import { Icon } from './icons'

const $ = React.createElement

const App = ({ store }) => {
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
