import reducer from './index';
import * as types from './index';

it('should return initial state', () => {
  expect(reducer(undefined, {})).toEqual(types.initialState);
});

it('should know how to change loading state', () => {
  expect(
    reducer(
      { data: {}, isLoading: false },
      { type: types.TOGGLE_LOADING, toggle: true }
    )
  ).toEqual({ data: {}, isLoading: true });
});
