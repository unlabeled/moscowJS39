import React, { Component } from "react"
import { complicatedCalc, myFetch } from "./utils"
import Logo from "./Logo"

export default class App extends Component {

  state = { loading: false, result: undefined, temp: undefined }
  
  doEverything(city) {
    const result = complicatedCalc(city)
    this.setState({ result, loading: true })
    myFetch(city)
      .then(temp => this.setState({ loading: false, temp }))
  }

  componentDidMount() {
    this.doEverything(this.props.city)
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.doEverything(this.props.city)
    }
  }

  render() {
    const { loading, result, temp } = this.state
    const hasTemp = temp !== undefined
    return (
      <div>
        <Logo />
        {loading && <div>...Loading</div>}
        {hasTemp && <div>Temperature is {`${temp}`} degrees celsius</div>}
        {Boolean(result) && <div>{`Result of complicated calculation is ${result}`}</div>}
      </div>
    )
  }
}