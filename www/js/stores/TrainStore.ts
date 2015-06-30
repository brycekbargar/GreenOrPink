/// <reference path="../../../typings/tsd.d.ts"/>
import EventEmitter from 'eventemitter3';
import Dispatcher from '../dispatcher/Dispatcher';
import * as Action from '../dispatcher/Action';
import Train from '../domain/Train';

import {
  DECISION_MADE
} from '../constants/TrainConstants';

class TrainStore {

  private emitter = new EventEmitter();

  public train: Train;

  setTrain(train: Train){
    this.train = train;
  }

  makeDecision() {
    this.emitter.emit(DECISION_MADE);
  }

  addChangeListener(callback: Function) {
    this.emitter.on(DECISION_MADE, callback, this);
  }

  removeChangeListener(callback: Function) {
    this.emitter.removeListener(DECISION_MADE, callback);
  }
}

let store = new TrainStore();

Dispatcher.register((action: Action.Base) => {

  if (!action || action.action !== DECISION_MADE){
    return;
  }

  if (action instanceof Action.WithPayload && action.value instanceof Train){
    store.setTrain(<Train>action.value);
    store.makeDecision();
  }
});

export default store;
