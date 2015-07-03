import EventEmitter = require('eventemitter3');
import Dispatcher from '../dispatcher/Dispatcher';
import Train from '../domain/Train';

import {
  DECISION_MADE
} from '../constants/TrainConstants';

class TrainStore {

  private emitter: EventEmitter;
  private currentTrain: Train;

  constructor(){
    this.emitter = new EventEmitter();
  }

  setTrain(train: any){
    this.currentTrain = train;
  }

  makeDecision() {
    this.emitter.emit(DECISION_MADE);
  }

  addObserver(callback: Function) {
    this.emitter.on(DECISION_MADE, callback);
  }

  removeObserver(callback: Function) {
    this.emitter.removeListener(DECISION_MADE, callback);
  }
}

let store = new TrainStore();
let callback = (action: any) => {
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
