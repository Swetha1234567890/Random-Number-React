// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onClickBtn = () => this.setState({number: Math.ceil(Math.random() * 100)})

  render() {
    const {number} = this.state

    return (
      <div className="background">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="about">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onClickBtn}>
            Generate
          </button>
          <p className="num">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
