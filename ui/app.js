import React from 'react'
import classes from './app.styl'
import { Icon } from './icons'

const $ = React.createElement

class App extends React.Component {
    render() {
        return $('div', { className: classes.msg }, [
            $(Icon, { name: 'arrow' }),
            'hello.'
        ])
    }
}

export default App
