// Write your code here
import {Component} from 'react'
import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: true}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageEle
    let btnEle

    if (isLogin === true) {
      messageEle = <Message content="Please Login" />
      btnEle = <Logout changeStatus={this.changeStatus} />
    } else {
      messageEle = <Message content="Welcome User" />
      btnEle = <Login changeStatus={this.changeStatus} />
    }

    return (
      <div className="container">
        <div className="card-container">
          {messageEle}
          {btnEle}
        </div>
      </div>
    )
  }
}

export default Home
