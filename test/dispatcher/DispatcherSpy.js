import { spy } from 'sinon';
import Dispatcher from '../../www/js/dispatcher/Dispatcher';

let dispatcherSpy = spy(Dispatcher, "register");

export default dispatcherSpy;
