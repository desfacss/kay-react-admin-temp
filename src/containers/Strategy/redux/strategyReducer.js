import { handleActions } from 'redux-actions';
import {
    priceRateRequest,
    priceRateSuccess,
    priceRateFailure,
} from './actions';

const defaultState = {
  data: null,
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [priceRateRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [priceRateSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [priceRateFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);