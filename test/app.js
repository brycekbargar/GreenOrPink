import { spy } from 'sinon';

import chai from 'chai';
let expect = chai.expect;
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import React from 'react';

import Application from '../www/js/components/Application'
import ActionsModule from '../www/js/actions/Actions';
let Actions = ActionsModule.default;
import app from '../www/js/app';

describe('app', function(){
  before('Spy', function(){
    this.react_createElement = spy(React, 'createElement');
    this.actions_makeDecision = spy(Actions, 'makeDecision');
  });
  after('Unspy', function(){
    this.react_createElement.restore();
    this.actions_makeDecision.restore();
  });
  afterEach('Reset spies', function(){
    this.react_createElement.reset();
    this.actions_makeDecision.reset();
  });

  it('Renders the application on load', function(){
    // Act
    app.load();

    // Assert
    var createdApplications =
      this
        .react_createElement
        .returnValues
        .filter(x => x.type === Application);

    expect(createdApplications).to.have.length(1);
  });

  it('Makes a decision on load', function(){
    // Act
    app.load();

    // Assert
    expect(this.actions_makeDecision).to.have.been.calledOnce;
  });

  it('Makes a decision on reload', function(){
    // Act
    app.reload();

    // Assert
    expect(this.actions_makeDecision).to.have.been.calledOnce;
  });
});
