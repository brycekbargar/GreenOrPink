import { expect } from 'chai';

import Train from '../../www/js/domain/Train';

describe('Train', function(){
  it('Picks the first train if it exists', function() {
    //Arrange
    var trains = [new Train(), new Train()];

    // Act
    var bestTrain = Train.pickBestFrom(trains);

    // Assert
    expect(bestTrain).to.equal(trains[0]);
  });

  it('Picks the pink line if there are no trains', function() {
    // Act
    var bestTrain = Train.pickBestFrom([]);

    // Assert
    expect(bestTrain.line).to.equal('pink');
  });

  it('Picks the pink line for null', function() {
    // Act
    var bestTrain = Train.pickBestFrom(null);

    // Assert
    expect(bestTrain.line).to.equal('pink');
  });

  it('Picks the pink line for undefined', function() {
    // Act
    var bestTrain = Train.pickBestFrom();

    // Assert
    expect(bestTrain.line).to.equal('pink');
  });
});
