import React from 'react';

export default class TrainDecision extends React.Component{
  render() {
    return (
      <div className={
        (this.props.train && this.props.train.line)
          ? this.props.train.line
          : 'loading'}>
      </div>
    );
  }
};