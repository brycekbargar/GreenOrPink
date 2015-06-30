import { should } from 'chai';
should();

// Arrange
import * as dispatcher1 from '../../www/js/dispatcher/Dispatcher';
import * as dispatcher2 from '../../www/js/dispatcher/Dispatcher';

describe('Dispatcher', function(){
  it('Is in singleton scope', function() {
    // Assert
    dispatcher1.default.should.equal(dispatcher2.default);
  });
});
