import {Component} from 'react'
import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {totalCount: 0, headCount: 0, tailCount: 0, image: headImg}

  onClickCoin = () => {
    const {totalCount, headCount, tailCount, image} = this.state

    const tossResults = Math.floor(Math.random() * 2)
    if (tossResults === 0) {
      this.setState({image: headImg})
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    } else {
      this.setState({image: tailImg})
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    }
  }

  render() {
    const {totalCount, headCount, tailCount, image} = this.state

    return (
      <div className="bg-container">
        <div className="coins-card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} className="image" alt="toss result" />
          <button className="button" type="button" onClick={this.onClickCoin}>
            Toss Coin
          </button>
          <div className="toss-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
