import React, { Component } from "react"
import { complicatedCalc, myFetch } from "./utils"
import Logo from "./Logo"

export default class App extends Component {
  
  state = {
    loading: false,
    result: undefined,
    temp: undefined
  }
  
  render() {
    const { loading, temp } = this.state
    const hasTemp = temp !== undefined
    const { city } = this.props
    const result = complicatedCalc(city)
    this.setState({ result, loading: true })
    myFetch(city).then(temp => this.setState(
      (state, props) => props.city === city && { loading: false, temp })
    )
    return (
      <div>
        <Logo />
        {loading && (
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
