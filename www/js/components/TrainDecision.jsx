import React from 'react';
import TrainModule from '../domain/Train';
let Train = TrainModule.default;

export default class TrainDecision extends React.Component{
  render() {
    return (
      <div className={
        (this.props.train && this.props.train.line)
          ? this.props.train.line
          : 'loading'
      }>
      </div>
    );
  }
};

TrainDecision.propTypes = { train: React.PropTypes.instanceOf(Train) };
