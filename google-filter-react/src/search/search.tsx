import { store } from '../store/Store';
import { StoreState } from '../store/StoreState';

import { sendRecordsToDB } from '../configs/firebase';

function formSearchDate(date: Date): string {
  const today: string[] = String(date).split(' ');
  let month = '';
  switch (today[1]) {
    case 'Jan':
      month = '1';
      break;
    case 'Feb':
      month = '2';
      break;
    case 'Mar':
      month = '3';
      break;
    case 'Apr':
      month = '4';
      break;
    case 'May':
      month = '5';
      break;
    case 'Jun':
      month = '6';
      break;
    case 'Jul':
      month = '7';
      break;
    case 'Aug':
      month = '8';
      break;
    case 'Sep':
      month = '9';
      break;
    case 'Oct':
      month = '10';
      break;
    case 'Nov':
      month = '11';
      break;
    case 'Dec':
      month = '12';
      break;
  }
  const dateForm: string = `${month}/${today[2]}/${today[3]}`;
  return dateForm;
}

export function onSearch(): void {
  const state: StoreState = store.getState();

  // Get primary content
  const primaries: string[] = state.primary.split(',').map((item) => {
    return item.trim();
  }).filter((item) => (item !== ''));

  let finalPrimary: string = '';
  primaries.forEach((item) => {
    finalPrimary += `${item} `;
  });

  // Get strong content
  const strongs: string[] = state.strong.split(',').map((item) => {
    return item.trim();
  }).filter((item) => (item !== ''));

  let finalStrong: string = '';
  strongs.forEach((item) => {
    finalStrong += `"${item}" `;
  });

  // Combine search queries
  const finalSearchQuery: string = `${finalPrimary}${finalStrong}`;
  if (finalSearchQuery === '') {
    // If no search query, abort searching
    return;
  }

  // Get except sites
  const excepts: string[] = state.except.split(',').map((item) => {
    return item.trim();
  }).filter((item) => (item !== ''));

  let finalExcept: string = '';
  excepts.forEach((item) => {
    finalExcept += `-site:${item} `;
  });

  // Get SafeSearch content
  const finalSafeSearch: string = (state.safeSearch ? '&safe=active' : '');

  // Get range content
  const startDateForm: string = formSearchDate(state.dateRangeStart);
  const endDateForm: string = formSearchDate(state.dateRangeEnd);
  const finalRange: string = ((state.range === '&tbs=cdr:1,') ? (
    state.range + `cd_min:${startDateForm},cd_max:${endDateForm}`
  ) : (state.range));

  // Get category
  const finalCategory: string = state.category;

  // Combine optional parameters
  const finalOptionalParameters: string = `${finalExcept}${finalSafeSearch}${finalRange}${finalCategory}`;

  // Combine the final query
  const finalQuery: string = `${finalSearchQuery}${finalOptionalParameters}`;

  // Open
  window.open(`https://www.google.com/search?q=${finalQuery}`, '_blank');

  // TODO: Implement pushing the query to recent record
  store.dispatch({
    type: 'APPENDRECORD',
    payload: finalQuery
  });
  sendRecordsToDB(store.getState().record);
}
