import React from 'react';

import Train from '../domain/Train'
import TrainStore from '../stores/TrainStore'
import TrainDecision from './TrainDecision';

export default class Application extends React.Component{

  constructor(...args) {
    super(...args);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  onChange() {
    this.setState({train: TrainStore.currentTrain});
  }

  componentDidMount() {
    TrainStore.addObserver(this.onChange);
  }

  componentWillUnmount() {
    TrainStore.removeObserver(this.onChange);
  }

  render() {
    return (
      <TrainDecision train={ this.state.train } />
    );
  }
};
