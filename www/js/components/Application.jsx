import React from 'react';

import TrainDecision from './TrainDecision';

import TrainModule from '../domain/Train'
import TrainStoreModule from '../stores/TrainStore'
let Train = TrainModule.default;
let TrainStore = TrainStoreModule.default;

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
