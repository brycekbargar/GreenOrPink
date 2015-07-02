export default class Train {
  constructor(line) {
    this.line = line;
  }

  static pickBestFrom(trains){
    if(trains && trains.count > 0){
      return trains[0];
    }
    // Pink by default
    return new Train('pink');
  }
}
