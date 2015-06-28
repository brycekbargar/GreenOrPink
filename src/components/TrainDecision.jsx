import React from 'react';
import { Train } from '../domain/Train'

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
