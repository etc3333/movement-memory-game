import { StartingScreen } from './StartingScreen';
import { GamePage } from './GamePage/GamePage';
import { EndingScreen } from './EndingScreen';

export const RenderComponent = ({begin, setBegin, end, setEnd}) => {
    if (end) {
      return <EndingScreen />;
    }
    else if (begin) {
      return <GamePage setEnd={setEnd} />;
    } else {
      return <StartingScreen setBegin={setBegin}/>;
    }
  }
