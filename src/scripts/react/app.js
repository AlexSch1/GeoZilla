// react application
import LikeButton from './components/button.js'

const React = require('react')
const ReactDOM = require('react-dom')

// document.addEventListener('load', function () {
const domContainer = document.querySelector('.nav__logo')
ReactDOM.render(<LikeButton />, domContainer)
// })
