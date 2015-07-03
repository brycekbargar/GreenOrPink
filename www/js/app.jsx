import React from 'react';
import Application from './components/Application';
import Action from './actions/Action'

class app {
  load(){
    React.render(<Application />, document.getElementById('app'));
    Action.makeDecision();
  }
  reload(){
    Action.makeDecision();
  }
}

export default new App();
