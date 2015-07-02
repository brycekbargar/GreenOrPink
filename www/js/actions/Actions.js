import Dispatcher from '../dispatcher/Dispatcher';
import Train from '../domain/Train';

import {
  DECISION_MADE
} from '../constants/TrainConstants';

export default {
  makeDecision(minutesAway){
    // Fetch the possible trains from the CTA based on minutesAway
    var possibleTrains = [];
    var bestTrain = Train.pickBestFrom(possibleTrains);
    Dispatcher.dispatch({
      action: DECISION_MADE,
      train: bestTrain
    });
  }
}
