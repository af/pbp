import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    render() {
        return React.createElement('div', null, 'hello')
    }
}

ReactDOM.render(React.createElement(App), document.querySelector('.app'))
