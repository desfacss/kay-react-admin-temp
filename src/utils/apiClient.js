import appConfigApi from './api/appConfigApi';
import covidApi from './api/covidApi';
import todoApi from './api/todoApi';
/***********apiCall******* */
import strategy from './api/strategyApi';

const api = {
  appConfig: appConfigApi,
  covid: covidApi,
  todo: todoApi,
  strategy:strategy,
  strategy:strategy
};

export default api;
