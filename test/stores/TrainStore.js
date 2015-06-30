import { spy } from 'sinon';

import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.should(); chai.use(sinonChai);

import dispatcherSpy from '../dispatcher/DispatcherSpy'

import Train from '../../www/js/domain/Train';
import TrainStore from '../../www/js/stores/TrainStore';

import {
  DECISION_MADE
} from '../../www/js/constants/TrainConstants';

describe('TrainStore', function(){
  before('Get callback', function(){
    this.TrainStore = TrainStore;
    this.callback = dispatcherSpy.getCall(0).args[0];
  });

  it('Adds and calls an Observer', function() {
    // Arrange
    var observer = spy();
    this.TrainStore.addObserver(observer);

    // Act
    this.callback({
      action: DECISION_MADE,
      train: new Train()
    });

    //Assert
    observer.should.have.been.calledOnce;
  });
});
