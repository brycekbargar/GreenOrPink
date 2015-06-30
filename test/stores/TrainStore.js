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
  beforeEach('Setup observer',function (){
    // Arrange
    this.observer = spy();
    TrainStore.addObserver(this.observer);
  });
  afterEach('Teardown observer', function (){
    TrainStore.removeObserver(this.observer);
  })

  it('Calls the Observer when it is registered', function() {
    // Act
    callback({
      action: DECISION_MADE,
      train: new Train()
    });

    //Assert
    this.observer.should.have.been.calledOnce;
  });
  it('Does not call the Observer when the action is incorrect', function() {
    // Act
    callback({
      action: 'BAD_ACTION',
      train: new Train()
    });

    //Assert
    this.observer.should.not.have.been.called;
  });
  it('Does not call the Observer when the action is missing', function() {
    // Act
    callback({
      train: new Train()
    });

    //Assert
    this.observer.should.not.have.been.called;
  });
  it('Does not call the Observer when the train is incorrect', function() {
    // Act
    callback({
      action: DECISION_MADE,
      train: new Array()
    });

    //Assert
    this.observer.should.not.have.been.called;
  });
  it('Does not call the Observer when the train is missing', function() {
    // Act
    callback({
      action: DECISION_MADE
    });

    //Assert
    this.observer.should.not.have.been.called;
  });
  it('Does not call the Observer when the train is null', function() {
    // Act
    callback({
      action: DECISION_MADE,
      train: null
    });

    //Assert
    this.observer.should.not.have.been.called;
  });
  it('Does not call the Observer when the train is undefined', function() {
    // Act
    callback({
      action: DECISION_MADE,
      train: undefined
    });

    //Assert
    this.observer.should.not.have.been.called;
  });
  it('Sets the train when a decision is made', function() {
    //Arrange
    var train = new Train();

    // Act
    callback({
      action: DECISION_MADE,
      train: train
    });

    //Assert
    TrainStore.train.should.equal(train);
  });
  it('Does not call the Observer when it is unregistered', function() {
    //Arrange
    TrainStore.removeObserver(this.observer);

    // Act
    callback({
      action: DECISION_MADE,
      train: new Train()
    });

    //Assert
    this.observer.should.not.have.been.called;
  });
});
