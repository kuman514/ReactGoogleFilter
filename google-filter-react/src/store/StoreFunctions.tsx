import { StoreState } from './StoreState';
import firebase from 'firebase/app';

export function onSetCategory(state: StoreState, newCategory: string): StoreState {
  return {
    ...state,
    category: newCategory
  };
}

export function onSetPrimary(state: StoreState, newPrimary: string): StoreState {
  return {
    ...state,
    primary: newPrimary
  };
}

export function onSetStrong(state: StoreState, newStrong: string): StoreState {
  return {
    ...state,
    strong: newStrong
  };
}

export function onSetExcept(state: StoreState, newExcept: string): StoreState {
  return {
    ...state,
    except: newExcept
  };
}

export function onSetSafeSearch(state: StoreState, newSafeSearchStatus: boolean): StoreState {
  return {
    ...state,
    safeSearch: newSafeSearchStatus
  };
}

export function onSetRange(state: StoreState, newRange: string) {
  return {
    ...state,
    range: newRange
  };
}

export function onSetDateRangeStart(state: StoreState, newDateRangeStart: Date): StoreState {
  return {
    ...state,
    dateRangeStart: new Date(newDateRangeStart)
  };
}

export function onSetDateRangeEnd(state: StoreState, newDateRangeEnd: Date): StoreState {
  return {
    ...state,
    dateRangeEnd: new Date(newDateRangeEnd)
  };
}

export function onSetUser(state: StoreState, newUser: firebase.User | null | undefined): StoreState {
  return {
    ...state,
    user: newUser
  };
}

export function onChangeRecord(state: StoreState, changedRecord: string[]): StoreState {
  if (!state.user) {
    return state;
  }

  return {
    ...state,
    record: Array.from(changedRecord)
  };
}

export function onAppendRecord(state: StoreState, newRecord: string): StoreState {
  if (!state.user) {
    return state;
  }

  const changedRecord: string[] = Array.from(state.record);
  changedRecord.splice(0, 0, newRecord);

  return {
    ...state,
    record: changedRecord
  };
}

export function onChangeTheme(state: StoreState, changedTheme: string): StoreState {
  return {
    ...state,
    theme: changedTheme
  };
}
