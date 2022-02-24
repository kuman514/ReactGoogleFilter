import { Action } from 'redux';
import firebase from 'firebase/app';

// SETCATEGORY
class SetCategoryAction implements Action {
  readonly type = 'SETCATEGORY';
  constructor(public payload: string) {}
}

// SETPRIMARY
class SetPrimaryAction implements Action {
  readonly type = 'SETPRIMARY';
  constructor(public payload: string) {}
}

// SETSTRONG
class SetStrongAction implements Action {
  readonly type = 'SETSTRONG';
  constructor(public payload: string) {}
}

// SETEXCEPT
class SetExceptAction implements Action {
  readonly type = 'SETEXCEPT';
  constructor(public payload: string) {}
}

// SETSAFESEARCH
class SetSafeSearchAction implements Action {
  readonly type = 'SETSAFESEARCH';
  constructor(public payload: boolean) {}
}

// SETRANGE
class SetRangeAction implements Action {
  readonly type = 'SETRANGE';
  constructor(public payload: string) {}
}

// SETDATERANGESTART
class SetDateRangeStartAction implements Action {
  readonly type = 'SETDATERANGESTART';
  constructor(public payload: Date) {}
}

// SETDATERANGEEND
class SetDateRangeEndAction implements Action {
  readonly type = 'SETDATERANGEEND';
  constructor(public payload: Date) {}
}

// SETUSER
class SetUserAction implements Action {
  readonly type = 'SETUSER';
  constructor(public payload: firebase.User | null | undefined) {}
}

// CHANGERECORD
class ChangeRecordAction implements Action {
  readonly type = 'CHANGERECORD';
  constructor(public payload: string[]) {}
}

// APPENDRECORD
class AppendRecordAction implements Action {
  readonly type = 'APPENDRECORD';
  constructor(public payload: string) {}
}

// CHANGETHEME
class ChangeThemeAction implements Action {
  readonly type = 'CHANGETHEME';
  constructor(public payload: string) {}
}

// OPENORCLOSERECENT
class OpenOrCloseRecentAction implements Action {
  readonly type = 'OPENORCLOSERECENT';
  constructor(public payload: boolean) {}
}

export type StoreAction = 
  | SetCategoryAction
  | SetPrimaryAction
  | SetStrongAction
  | SetExceptAction
  | SetSafeSearchAction
  | SetRangeAction
  | SetDateRangeStartAction
  | SetDateRangeEndAction
  | SetUserAction
  | ChangeRecordAction
  | AppendRecordAction
  | ChangeThemeAction
  | OpenOrCloseRecentAction;
