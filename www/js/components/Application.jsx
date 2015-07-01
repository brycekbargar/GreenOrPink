import React from 'react';

import TrainStore from 'TrainStore'
import TrainDecision from 'TrainDecision';

export default class Application extends React.Component{

  constructor(...args) {
    super(...args);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.SetState(TrainStore.currentTrain);
  }

  componentDidMount() {
    TrainStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    TrainStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <TrainDecision train={ this.state } />
    );
  }
};
