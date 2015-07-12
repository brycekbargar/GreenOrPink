import Train from '../domain/Train';
import Message from './Message';

export default class DecisionMadeMessage implements Message{
  public static action = 'DECISION_MADE';

  public get train() : Train{
    return this._train;
  }
  constructor(private _train: Train){}
}
