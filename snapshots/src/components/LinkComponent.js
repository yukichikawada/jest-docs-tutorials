import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL:  'normal',
};

export default class LinkComponent extends React.Component {
  constructor() {
    super();

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      status: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({status: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({status: STATUS.NORMAL});
  }

  render() {
    return (
      <a className={this.state.status}
        id="LinkComponent"
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}