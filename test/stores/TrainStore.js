import { spy } from 'sinon';

import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.should(); chai.use(sinonChai);

import Train from '../../www/js/domain/Train';
import {
  default as TrainStore,
  __test_callback as callback
} from '../../www/js/stores/TrainStore';

import {
  DECISION_MADE
} from '../../www/js/constants/TrainConstants';

describe('TrainStore', function(){
  beforeEach('Setup spy',function (){
    this.observer = spy();
    TrainStore.addObserver(this.observer);
  });
  afterEach('Teardown observer', function (){
    TrainStore.removeObserver(this.observer);
  })

  it('Adds and calls an Observer', function() {
    // Act
    callback({
      action: DECISION_MADE,
      train: new Train()
    });

    //Assert
    this.observer.should.have.been.calledOnce;
  });
});
