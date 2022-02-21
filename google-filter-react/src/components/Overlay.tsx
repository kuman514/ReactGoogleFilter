import OverlayUpper from './OverlayUpper';
import OverlayUnder from './OverlayUnder';

/*
interface OverlayProps {
  onLogin?: Function,
  onLogout?: Function
}

interface OverlayState {
  recentQueries: string[]
}
*/

function Overlay(): JSX.Element {
  return (
    <div className="Overlay">
      <div className="OverlayContent">
        <OverlayUpper />
        <OverlayUnder />
      </div>
    </div>
  );
}

export default Overlay;
