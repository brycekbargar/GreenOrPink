import React from 'react';
import ReactAddons from 'react/addons';
let { TestUtils } = ReactAddons.addons;

import { spy } from 'sinon';

import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
let expect = chai.expect;

import Application from '../../www/js/components/Application'
import TrainDecision from '../../www/js/components/TrainDecision'
import TrainStore from '../../www/js/stores/TrainStore'
import Train from '../../www/js/domain/Train'

describe('Application', function(){

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

  beforeEach('Render Application', function(){
    this.application = TestUtils.renderIntoDocument(<Application />);
    this.onChange = this.trainStore_addObserver.args[0][0];
  });

  afterEach('Reset spies', function(){
    this.react_createElement.reset();
    this.trainStore_addObserver.reset();
    this.trainStore_removeObserver.reset();
  });

  it('Renders a single TrainDecision Component', function() {
    var createdTrainDecisions =
      this
        .react_createElement
        .returnValues
        .filter(x => x.type === TrainDecision);

    expect(createdTrainDecisions).to.have.length(1);
    expect(createdTrainDecisions[0].props.train).to.be.undefined;
  });

  it('Rerenders a TrainDecision Component', function() {
    this.onChange();

    var createdTrainDecisions =
      this
        .react_createElement
        .returnValues
        .filter(x => x.type === TrainDecision);

    expect(createdTrainDecisions).to.have.length(2);
    expect(createdTrainDecisions[0].props.train).to.be.undefined;
    expect(createdTrainDecisions[1].props.train).to.be.undefined;
  });

  it('Correctly passes the TrainStores value', function(){
    var train = new Train();

    TrainStore.currentTrain = train;
    this.onChange();

    var createdTrainDecisions =
      this
        .react_createElement
        .returnValues
        .filter(x => x.type === TrainDecision);

    expect(createdTrainDecisions[1].props.train).to.equal(train);
  });

  it('Handles the callback lifecycle', function() {
    React.unmountComponentAtNode(React.findDOMNode(this.application).parentNode);

    expect(this.trainStore_addObserver).to.have.been.calledOnce;
    expect(this.trainStore_removeObserver).to.have.been.calledOnce;
  });

});
