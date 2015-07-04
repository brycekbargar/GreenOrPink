import Dispatcher from '../dispatcher/Dispatcher';
import Train from '../domain/Train';

import DecisionMadeMessage from '../messages/DecisionMadeMessage';

export default {
  makeDecision(){
    // Fetch the possible trains from the CTA based on minutes away from clark/lake
    var possibleTrains: Train[] = [];

    // Will be a promise but simulate work for now
    setTimeout(() => {
      var bestTrain = Train.pickBestFrom(possibleTrains);
      Dispatcher.dispatch(new DecisionMadeMessage(bestTrain));
    }, 3000);
  }
}
