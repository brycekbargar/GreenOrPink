import sinon = require('sinon');
let spy = sinon.spy;

import chai = require('chai');
let expect = chai.expect;
import sinonChai = require('sinon-chai');
chai.use(sinonChai);

import Train from '../../www/js/domain/Train';
import {
  default as TrainStore,
  __test_callback as callback
  } from '../../www/js/stores/TrainStore';

import {
  DECISION_MADE
} from '../../www/js/constants/TrainConstants';

describe('TrainStore', function(){
  beforeEach(function (){
    // Arrange
    this.observer = spy();
    TrainStore.addObserver(this.observer);
  });
  afterEach(function (){
    TrainStore.removeObserver(this.observer);
  })

  it('Calls the Observer when it is registered', function() {
    // Act
    callback({
      action: DECISION_MADE,
      train: new Train()
    });

    //Assert
    expect(this.observer).to.have.been.calledOnce;
  });
  it('Does not call the Observer when the action is incorrect', function() {
    // Act
    callback({
      action: 'BAD_ACTION',
      train: new Train()
    });

    //Assert
    expect(this.observer).to.not.have.been.called;
  });
  it('Does not call the Observer when the action is missing', function() {
    // Act
    callback({
      train: new Train()
    });

    //Assert
    expect(this.observer).to.not.have.been.called;
  });
  it('Does not call the Observer when the train is not a train', function() {
    // Act
    callback({
      action: DECISION_MADE,
      train: new Array()
    });

    //Assert
    expect(this.observer).to.not.have.been.called;
  });
  it('Does not call the Observer when the train is missing', function() {
    // Act
    callback({
      action: DECISION_MADE
    });

    //Assert
    expect(this.observer).to.not.have.been.called;
  });
  it('Does not call the Observer when the train is null', function() {
    // Act
    callback({
      action: DECISION_MADE,
      train: null
    });

    //Assert
    expect(this.observer).to.not.have.been.called;
  });
  it('Does not call the Observer when no message is passed', function() {
    // Act
    callback();

    //Assert
    expect(this.observer).to.not.have.been.called;
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
    expect(TrainStore.currentTrain).to.equal(train);
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
    expect(this.observer).to.not.have.been.called;
  });
});
