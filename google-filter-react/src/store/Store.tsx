import { createStore } from 'redux';

import { StoreState, initState } from './StoreState';
import { StoreAction } from './StoreActionTypes';
import {
  onSetCategory,
  onSetPrimary,
  onSetStrong,
  onSetExcept,
  onSetSafeSearch,
  onSetRange,
  onSetDateRangeStart,
  onSetDateRangeEnd,
  onSetUser,
  onChangeRecord,
  onAppendRecord,
  onChangeTheme
} from './StoreFunctions';

export const store = createStore((state: StoreState = initState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'SETCATEGORY':
      return onSetCategory(state, action.payload);
    case 'SETPRIMARY':
      return onSetPrimary(state, action.payload);
    case 'SETSTRONG':
      return onSetStrong(state, action.payload);
    case 'SETEXCEPT':
      return onSetExcept(state, action.payload);
    case 'SETSAFESEARCH':
      return onSetSafeSearch(state, action.payload);
    case 'SETRANGE':
      return onSetRange(state, action.payload);
    case 'SETDATERANGESTART':
      return onSetDateRangeStart(state, action.payload);
    case 'SETDATERANGEEND':
      return onSetDateRangeEnd(state, action.payload);
    case 'SETUSER':
      return onSetUser(state, action.payload);
    case 'CHANGERECORD':
      return onChangeRecord(state, action.payload);
    case 'APPENDRECORD':
      return onAppendRecord(state, action.payload);
    case 'CHANGETHEME':
      return onChangeTheme(state, action.payload);
    default:
      return state;
  }
});
