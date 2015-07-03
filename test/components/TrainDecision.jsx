import React from 'react/addons'
let { TestUtils } = React.addons;

import { expect } from 'chai';

import TrainDecision from '../../www/js/components/TrainDecision'
import Train from '../../www/js/domain/Train'

describe('TrainDecision component', function(){
  before('render and locate element', function() {
    var renderFor = (train) => {
      var renderedComponent = TestUtils.renderIntoDocument(<TrainDecision train={train} />);
      var inputComponent = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div');
      return inputComponent.getDOMNode();
    }

    // Arrange && Act
    this.trainDecisions = {
      greenLine: renderFor(new Train('green')),
      pinkLine: renderFor(new Train('pink')),
      undefinedLine: renderFor(new Train()),
      nullLine: renderFor(new Train(null)),
      nullTrain: renderFor(null)
    };
  });

  // Assert
  it('Renders the Green Line as green', function() {
    expect(this.trainDecisions.greenLine.className).to.equal('green');
  });
  it('Renders the Pink Line as pink', function() {
    expect(this.trainDecisions.pinkLine.className).to.equal('pink');
  });
  it('Renders an undefined Line as loading', function() {
    expect(this.trainDecisions.undefinedLine.className).to.equal('loading');
  });
  it('Renders a null Line as loading', function() {
    expect(this.trainDecisions.nullLine.className).to.equal('loading');
  });
  it('Renders a null Train as loading', function() {
    expect(this.trainDecisions.nullTrain.className).to.equal('loading');
  });
});
