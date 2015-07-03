import Dispatcher from '../dispatcher/Dispatcher';
import Train from '../domain/Train';

import {
  DECISION_MADE
} from '../constants/TrainConstants';

export default {
  makeDecision(){
    // Fetch the possible trains from the CTA based on minutes away from clark/lake
    var possibleTrains = [];
    
    // Will be a promise but simulate work for now
    setTimeout(() => {
      var bestTrain = Train.pickBestFrom(possibleTrains);
      Dispatcher.dispatch({
        action: DECISION_MADE,
        train: bestTrain
      });
    }, 3000);
  }
}
