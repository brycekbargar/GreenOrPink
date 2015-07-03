import React from 'react';
import Application from './components/Application';
import Actions from './actions/Actions'

class app {
  load(){
    React.render(<Application />, document.getElementById('app'));
    Actions.makeDecision();
  }
  reload(){
    Actions.makeDecision();
  }
}

export default new app();
