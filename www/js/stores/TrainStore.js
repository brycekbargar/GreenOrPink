import EventEmitter from 'eventemitter3';
import Dispatcher from '../dispatcher/Dispatcher';
import Train from '../domain/Train';

import {
  DECISION_MADE
} from '../constants/TrainConstants';

class TrainStore {

  private emitter = new EventEmitter();

  public train;

  setTrain(train){
    this.train = train;
  }

  makeDecision() {
    this.emitter.emit(DECISION_MADE);
  }

  addChangeListener(callback) {
    this.emitter.on(DECISION_MADE, callback);
  }

  removeChangeListener(callback) {
    this.emitter.removeListener(DECISION_MADE, callback);
  }
}

let store = new TrainStore();

Dispatcher.register((action) => {

  if (!action || action.action !== DECISION_MADE){
    return;
  }

  if (action.value instanceof Train){
    store.setTrain(action.value);
    store.makeDecision();
  }
});

export default store;
