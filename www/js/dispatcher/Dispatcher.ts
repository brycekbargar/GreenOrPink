import flux = require('flux');

import Message from '../messages/Message';

export default new flux.Dispatcher<Message>();
