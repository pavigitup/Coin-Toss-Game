import {Component} from 'react'
import './index.css'

const imgUrl = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

class CoinToss extends Component {
  state = {count: 0, heads: 0, tails: 0, imageUrl: imgUrl[0], images: imgUrl}

  changeToss = () => {
    const {count, imageUrl, images} = this.state
    this.setState({
      count: Math.round(Math.random()),
    })
    if (count === 1) {
      this.setState(preState => ({heads: preState.heads + 1}))
      this.setState({
        imageUrl: images[0],
      })
    } else {
      this.setState(preState => ({tails: preState.heads + 1}))
      this.setState({
        imageUrl: images[1],
      })
    }
  }

  render() {
    const {heads, tails, imageUrl} = this.state
    const total = heads + tails

    return (
      <div className="bg-con">
        <h1 style={{width: '300px'}}>Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        <img src={imageUrl} alt="toss result" className="toss-img" />
        <button type="button" onClick={this.changeToss}>
          Toss Coin
        </button>
        <div className="coins-count">
          <p>Total: {total}</p>
          <p>Heads: {heads}</p>
          <p>Tails: {tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
