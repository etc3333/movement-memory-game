import { StartingScreen } from './StartingScreen';
import { GamePage } from './GamePage/GamePage';
import { EndingScreen } from './EndingScreen';


export const RenderComponent = ({begin, setBegin, end}) => {
    if (end) {
      return <EndingScreen />;
    }
    else if (begin) {
      return (
        <GamePage />
      );
    } else {
      return (
        <StartingScreen key="StartingScreen" setBegin={setBegin}/>
      );
    }
  }
