import React from 'react'
import classes from './icons.styl'

const $ = React.createElement

/**
* Render an SVG icon from the icon sprite
*/
const Icon = ({ name }) => {
    return $('svg', { className: `${classes.icon} icon-${name}` },
        $('use', { xlinkHref: `/assets/icon_sprite.svg#icon-${name}` })
    )
}

export { Icon }
