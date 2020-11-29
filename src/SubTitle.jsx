import React from 'react';

class SubTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ""};
  }

  componentDidMount() {
    const showText = (message, index) => {
      if (index < message.length) {
        this.setState({
          message: this.state.message + message[index++]
        });
        let interval = index < message.length && message[index] !== ' ' ? 200 : 0;
        setTimeout(() => showText(message, index), interval);
      }
    };
    showText("the making of", 0);
  }

  render() {
    return (
      <div>
        <p className="subtitle">{this.state.message}</p>
      </div>
    );
  }
}

export default SubTitle;
