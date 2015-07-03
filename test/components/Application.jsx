import React from 'react';
import ReactAddons from 'react/addons';
let { TestUtils } = ReactAddons.addons;

import { spy } from 'sinon';

import chai from 'chai';
let expect = chai.expect;
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Application from '../../www/js/components/Application'
import TrainDecision from '../../www/js/components/TrainDecision'

import TrainStoreModule from '../../www/js/stores/TrainStore'
import TrainModule from '../../www/js/domain/Train';
let TrainStore = TrainStoreModule.default;
let Train = TrainModule.default;

describe('Application', function(){

  // Arrange
  before('Spy', function(){
    this.react_createElement = spy(React, 'createElement');
    this.trainStore_addObserver = spy(TrainStore, 'addObserver');
    this.trainStore_removeObserver = spy(TrainStore, 'removeObserver');
  });

  after('Unspy', function(){
    this.react_createElement.restore();
    this.trainStore_addObserver.restore();
    this.trainStore_removeObserver.restore();
  });

  afterEach('Reset spies', function(){
    this.react_createElement.reset();
    this.trainStore_addObserver.reset();
    this.trainStore_removeObserver.reset();
  });

  // Act
  beforeEach('Render Application', function(){
    this.application = TestUtils.renderIntoDocument(<Application />);
    this.onChange = this.trainStore_addObserver.args[0][0];
  });

  it('Renders a single TrainDecision Component', function() {
    // Assert
    var createdTrainDecisions =
      this
        .react_createElement
        .returnValues
        .filter(x => x.type === TrainDecision);

    expect(createdTrainDecisions).to.have.length(1);
  });

  it('Rerenders a TrainDecision Component', function() {
    // Act
    this.onChange();

    // Assert
    var createdTrainDecisions =
      this
        .react_createElement
        .returnValues
        .filter(x => x.type === TrainDecision);

    expect(createdTrainDecisions).to.have.length(2);
  });

  it('Correctly passes the TrainStores value', function(){
    // Act
    var train = new Train();

    TrainStore.currentTrain = train;
    this.onChange();

    // Assert
    var createdTrainDecisions =
      this
        .react_createElement
        .returnValues
        .filter(x => x.type === TrainDecision);

    expect(createdTrainDecisions[1].props.train).to.equal(train);
  });

  it('Handles the callback lifecycle', function() {
    // Act
    React.unmountComponentAtNode(React.findDOMNode(this.application).parentNode);

    // Assert
    expect(this.trainStore_addObserver).to.have.been.calledOnce;
    expect(this.trainStore_removeObserver).to.have.been.calledOnce;
  });

});
