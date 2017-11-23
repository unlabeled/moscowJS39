import React, { Component } from "react"
import { complicatedCalc, functionResult, request } from "./utils"
import Logo from "./Logo"

export default class App extends Component {
  
  state = {}  

  render() {
    const { city } = this.props
    const temp = request.call(this, city)
    const result = functionResult.call(this, complicatedCalc, city)
    const hasTemp = temp !== undefined
    return (
      <div>
        <Logo />
        {!hasTemp && (
          <div>...Loading</div>
        )}
        {hasTemp && (
          <div>
            Temperature is {temp} degrees celsius
          </div>
        )}
        {Boolean(result) && (
          <div>
            Result of complicated calculation is {result}
          </div>
        )}
      </div>
    )
  }  
}
