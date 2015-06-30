import React from 'react/addons';
import { should } from 'chai';

import TrainDecision from '../../www/js/components/TrainDecision'
import Train from '../../www/js/domain/Train'

let { TestUtils } = React.addons;
should();

describe('TrainDecision component', function(){
  before('render and locate element', function() {

    var renderFor = (train) => {
      var renderedComponent = TestUtils.renderIntoDocument(<TrainDecision train={train} />);
      var inputComponent = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'div');

      return inputComponent.getDOMNode();
    }

    this.trainDecisions = {
      greenLine: renderFor(new Train('green')),
      pinkLine: renderFor(new Train('pink')),
      undefinedLine: renderFor(new Train()),
      nullLine: renderFor(new Train(null)),
      nullTrain: renderFor(null)
    };
  });

  it('Renders the Green Line as green', function() {
    this.trainDecisions.greenLine.className.should.equal('green');
  });
  it('Renders the Pink Line as pink', function() {
    this.trainDecisions.pinkLine.className.should.equal('pink');
  });
  it('Renders an undefined Line as loading', function() {
    this.trainDecisions.undefinedLine.className.should.equal('loading');
  });
  it('Renders a null Line as loading', function() {
    this.trainDecisions.nullLine.className.should.equal('loading');
  });
  it('Renders a null Train as loading', function() {
    this.trainDecisions.nullTrain.className.should.equal('loading');
  });
});
