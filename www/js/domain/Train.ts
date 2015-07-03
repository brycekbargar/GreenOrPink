export default class Train {
  constructor(public line: string) {
  }

  static pickBestFrom(trains: Train[]) : Train{
    if(trains && trains.length > 0){
      return trains[0];
    }
    // Pink by default
    return new Train('pink');
  }
}
