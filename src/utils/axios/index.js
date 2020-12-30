import { Axios } from '@/utils/axios/axios';
import { deepMerg } from '@/utils';
import { isString } from '@/utils/is';
import { errResponse } from '@/utils/axios/const';
import { checkStatus } from '@/utils/axios/checkStatus';
import { commitStore } from '@/store';
import { Toast } from 'vant';

const transform = {
  transformResponseData(res, options) {
    console.log(res, options);
    if (!res) {
      return errResponse;
    }
    return res.data;
  },

  beforeRequestHook(config, options) {
    console.log('before request', config, options);
    createLoading(options);
    if (config.method?.toUpperCase() === 'GET') {
      if (!isString(config.params)) {
        config.data = {
          params: Object.assign(config.params || {}, { '_t': new Date().getTime() })
        };
      } else {
        config.url = config.url + config.params + `_t: ${new Date().getTime()}`;
        config.params = undefined;
      }
    } else {
      if (!isString(config.params)) {
        config.data = config.params;
        config.params = undefined;
      } else {
        config.url = config.url + config.params;
        config.params = undefined;
      }
    }
    return config;
  },

  requestInterceptors(config) {
    console.log(config);
    config.headers.token = 'aaaa';
    return config;
  },

  requestInterceptorsCatch(err) {
    return Promise.reject(err);
  },

  responseInterceptors(res) {
    console.log('response');
    clearLoading();
    return res;
  },

  responseInterceptorsCatch(err) {
    const { response, code, message } = err || {};
    console.log(response, code);
    clearLoading();
    checkStatus(err?.response?.status, message);
    return Promise.reject(err);
  }
};

function createLoading(option) {
  if (option.loading) {
    Toast.loading({
      message: '加载中...',
      duration: 0,
      forbidClick: true,
      loadingType: 'circular'
    });
  }
}

function clearLoading() {
  Toast.clear();
  commitStore('HIDE_PAGE_LOADING');
}

function createAxios(option) {
  return new Axios(
    deepMerg({
      baseURL: '/',
      timeout: 10 * 1000,
      transform,
      requestOptions: {
        loading: true,
        errorMessageMode: 'message'
      }
    }, option || {})
  );
}

export const service = createAxios();
