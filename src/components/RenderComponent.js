import { StartingScreen } from './StartingScreen';
import { GamePage } from './GamePage/GamePage';
import { EndingScreen } from './EndingScreen';

export const RenderComponent = ({begin, setBegin, end, setEnd}) => {
    if (end) {
      return <EndingScreen setBegin={setBegin} setEnd={setEnd}/>;
    }
    else if (begin) {
      return (
        <GamePage />
      );
    } else {
      return (
        <StartingScreen setBegin={setBegin}/>
      );
    }
  }
