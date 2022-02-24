import firebase from 'firebase/app';
import { userPrefersDark } from '../configs/theme';

export interface StoreState {
  category: string,
  primary: string,
  strong: string,
  except: string,
  safeSearch: boolean,
  range: string,
  dateRangeStart: Date,
  dateRangeEnd: Date,
  user: firebase.User | null | undefined,
  record: string[]
  theme: string,
  recentFold: boolean
};

export const initState: StoreState = {
  category: '',
  primary: '',
  strong: '',
  except: '',
  safeSearch: false,
  range: '',
  dateRangeStart: new Date(),
  dateRangeEnd: new Date(),
  user: null,
  record: Array<string>(),
  theme: userPrefersDark ? 'dark' : 'light',
  recentFold: true
};
