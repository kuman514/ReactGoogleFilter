import { useSelector } from 'react-redux';
import { setFold, setTheme } from '../configs/theme';
import { StoreState } from '../store/StoreState';

function Theme(): null {
  const themeSelector = (state: StoreState): string => {
    return state.theme;
  };
  const theme: string = useSelector(themeSelector);

  const foldSelector = (state: StoreState): boolean => {
    return state.recentFold;
  };
  const fold: boolean = useSelector(foldSelector);

  setTheme(theme);
  setFold(fold);

  return null;
}

export default Theme;
