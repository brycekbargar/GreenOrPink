/// <reference path="../../../typings/tsd.d.ts"/>
import { Dispatcher } from 'flux';
import * as Action from './Action';

export default new Dispatcher<Action.Base>();
