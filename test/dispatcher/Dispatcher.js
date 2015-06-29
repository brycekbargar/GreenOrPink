import { should } from 'chai';
should();

import * as dispatcher1 from '../../src/dispatcher/Dispatcher';
import * as dispatcher2 from '../../src/dispatcher/Dispatcher';

describe('Dispatcher', function(){
  it('Is in singleton scope', function() {
    dispatcher1.default.should.equal(dispatcher2.default);
  });
});
