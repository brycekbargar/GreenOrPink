import EventEmitter from 'eventemitter3';
import Dispatcher from '../dispatcher/Dispatcher';
import Train from '../domain/Train';

import {
  DECISION_MADE
} from '../constants/TrainConstants';

class TrainStore {

  constructor(){
    this.emitter = new EventEmitter();
  }

  setTrain(train){
    this.train = train;
  }

  makeDecision() {
    this.emitter.emit(DECISION_MADE);
  }

  addObserver(callback) {
    this.emitter.on(DECISION_MADE, callback);
  }

  removeObserver(callback) {
    this.emitter.removeListener(DECISION_MADE, callback);
  }
}

let store = new TrainStore();
let callback = (action) => {
  if (!action || action.action !== DECISION_MADE){
    return;
  }
  if (action.train instanceof Train){
    store.setTrain(action.train);
    store.makeDecision();
  }
};

Dispatcher.register(callback);

export default store;
export { callback as __test_callback }
