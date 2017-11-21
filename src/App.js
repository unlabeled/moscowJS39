import React, { Component } from 'react'
import {
  complicatedCalc,
  functionResults,
  requests
} from "./utils"
import Logo from "./Logo"

export default class App extends Component {
  render() {
    const { city } = this.props
    const result = functionResults(complicatedCalc, city)
    const temp = requests.call(this, city)
    const hasTemp = temp !== undefined
    return (
      <div>
        <Logo />
        {!hasTemp && <div>...Loading</div>}
        {hasTemp && <div>Temperature is {`${temp}`} degrees celsius</div>}
        {Boolean(result) && <div>{`Result of complicated calculation is ${result}`}</div>}
      </div>
    )
  }
}