// @flow

export const SET_DATA = 'friends/SET_DATA';
export const IS_LOADING = 'friends/IS_LOADING';
export const TOGGLE_LOADING = 'friends/TOGGLE_LOADING';

export const initialState = {
  data: {},
  isLoading: false
};

// Flow types for our reducer
type SetAction = { type: typeof SET_DATA, data: Array<any> };
type LoadingAction = { type: typeof IS_LOADING, toggle: boolean };
type ToggleLoadingAction = { type: typeof TOGGLE_LOADING, toggle: boolean };
type ActionType = SetAction | LoadingAction | ToggleLoadingAction;
type DispatcherType = ActionType => void;

export default function(state: Object = initialState, action: ActionType) {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: action.data
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.toggle
      };
    }

    case TOGGLE_LOADING: {
      return {
        ...state,
        isLoading: action.toggle
      };
    }

    default:
      return state;
  }
}

export function toggleLoading(toggle: boolean) {
  return async (dispatch: DispatcherType) => {
    dispatch({ type: TOGGLE_LOADING, toggle });
  };
}

export function fetch() {
  return async (dispatch: DispatcherType) => {
    dispatch({ type: IS_LOADING, toggle: true });

    await new Promise(r => {
      setTimeout(() => r(), 1000);
    });

    dispatch({
      type: SET_DATA,
      data: [1, 2, 3]
    });

    dispatch({ type: IS_LOADING, toggle: false });
  };
}
