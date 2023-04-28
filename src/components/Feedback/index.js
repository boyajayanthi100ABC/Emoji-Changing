// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickEmoji = () => this.setState({isFeedback: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <h1 className="heading">
          {' '}
          How satisfied are you with our customer support performance?{' '}
        </h1>
        <ul className="emojis-list">
          {emojis.map(each => (
            <li key={each.id}>
              <button type="button" className="btn" onClick={this.onClickEmoji}>
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="emoji-imh"
                />
                <br />
                <span className="emoji-name"> {each.name} </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji-love" />
        <h1 className="thank-you-text"> Thank You </h1>
        <p className="desc">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div className="container">
        <div className="feedback-card">
          {isFeedback
            ? this.renderThankyouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
