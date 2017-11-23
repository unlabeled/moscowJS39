import React, { Component } from "react"
import { complicatedCalc, myFetch } from "./utils"
import Logo from "./Logo"

export default class App extends Component {
  
  state = {
    loading: false,
    result: undefined,
    temp: undefined
  }

  componentWillReceiveProps(nextProps) {
    const { city } = this.props
    if (nextProps.city === city) {
      return undefined
    }  
    const result = complicatedCalc(city)
    this.setState({ result, loading: true })
    myFetch(city).then(temp => this.setState(
      (state, props) => props.city === city && { loading: false, temp })
    )
  }
  
  render() {
    const { loading, result, temp } = this.state
    const hasTemp = temp !== undefined
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
