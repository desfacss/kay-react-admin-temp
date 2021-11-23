import { createAction } from 'redux-actions';
import api from '../../utils/apiClient';

export const priceRateRequest = createAction('FETCH_PRICE_REQUEST');
export const priceRateSuccess = createAction('FETCH_PRICE_SUCCESS');
export const priceRateFailure = createAction('FETCH_PRICE_FAILURE');

export const fetchPriceRate = () => async (dispatch) => {
  console.log("======fetchPriceRate=======")
  try {
    dispatch(priceRateRequest());
    const response = await api.strategy.getPriceRate(); // Fake request example
    const configAppData = response.data;
    dispatch(priceRateSuccess(configAppData));
  } catch (error) {
    dispatch(priceRateFailure({ error }));
    throw error;
  }
};