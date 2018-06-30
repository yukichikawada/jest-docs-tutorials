import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();

    this.state = {seconds: Date.now() / 1000};
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      seconds: Date.now() / 1000,
    });
  }

  render() {
    return (
      <p>{this.state.seconds} seconds have ellapsed since UNIX epoch.</p>
    );
  }
}