export class Base{
  constructor(public action: string){}
}

export class WithPayload<TValue> extends Base{
  constructor(public action: string,  public value: TValue){
    super(action);
  }
}
