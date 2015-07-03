import { expect } from 'chai';

// Arrange
import * as dispatcher1 from '../../www/js/dispatcher/Dispatcher';
import * as dispatcher2 from '../../www/js/dispatcher/Dispatcher';

describe('Dispatcher', function(){
  it('Is in singleton scope', function() {
    // Assert
    expect(dispatcher1.default).to.equal(dispatcher2.default);
  });
});
