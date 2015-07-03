import React from 'react';
import Application from './components/Application';
import ActionsModule from './actions/Actions'
let Actions = ActionsModule.default;

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
