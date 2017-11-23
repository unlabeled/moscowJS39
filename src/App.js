import React, { Component } from "react"
import { complicatedCalc, myFetch } from "./utils"
import Logo from "./Logo"

export default class App extends Component {
  
  state = {
    loading: false,
    result: undefined,
    temp: undefined
  }

  componentDidMount() {
    const { city } = this.props
    const result = complicatedCalc(city)
    this.setState({ result, loading: true })
    myFetch(city).then(temp => this.setState({ loading: false, temp }))
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
