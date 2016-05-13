import React from 'react'
import classes from './app.styl'

class App extends React.Component {
    render() {
        return React.createElement('div', { className: classes.msg }, 'hello.')
    }
}

export default App
