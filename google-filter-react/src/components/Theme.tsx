import { useSelector } from 'react-redux';
import { setTheme } from '../configs/theme';
import { StoreState } from '../store/StoreState';

function Theme(): null {
  const themeSelector = (state: StoreState): string => {
    return state.theme;
  };
  const theme: string = useSelector(themeSelector);

  setTheme(theme);

  return null;
}

export default Theme;
