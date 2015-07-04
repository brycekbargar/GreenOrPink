import EventEmitter = require('eventemitter3');
import Dispatcher from '../dispatcher/Dispatcher';
import Train from '../domain/Train';

import Message from '../messages/Message';
import DecisionMadeMessage from '../messages/DecisionMadeMessage';

class TrainStore {

  private emitter: EventEmitter;

  private _currentTrain: Train;
  get currentTrain():Train {
    return this._currentTrain;
  }

  constructor(){
    this.emitter = new EventEmitter();
  }

  public setTrain(train: any){
    this._currentTrain = train;
  }

  public makeDecision() {
    this.emitter.emit(DecisionMadeMessage.action);
  }

  public addObserver(callback: Function) {
    this.emitter.on(DecisionMadeMessage.action, callback);
  }

  public removeObserver(callback: Function) {
    this.emitter.removeListener(DecisionMadeMessage.action, callback);
  }
}

let store = new TrainStore();
let callback = (message?: Message) => {
  if (message instanceof DecisionMadeMessage && message.train){
      store.setTrain(message.train);
      store.makeDecision();
  }
};

Dispatcher.register(callback);

export default store;
export { callback as __test_callback }
