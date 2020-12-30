import { service } from '@/utils/axios';

export function test(params) {
  return service.request({
    method: 'get',
    url: '/api',
    params
  });
}