import { get,post } from './base/index';

export default {
    get: (data) => {
      const params = { ...data };
      return get('https://corona.lmao.ninja/v2/countries', { params });
    },
    getPriceRate:()=>{
      return post('https://flask-push-api.herokuapp.com/api/v1/getpricerates', { 
        "exchange":"NSE",
        "symbol" : "NIFTY",
        "tradedate" : "2020-01-01",
        "tradetime" : "09:17:00"
    });
    }
  };