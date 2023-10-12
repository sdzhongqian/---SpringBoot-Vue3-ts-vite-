import { request } from '@/utils/request';
import querystring from 'querystring';

export function getListPage(params: API.TimTaskQueryParams) {
  let queryString = querystring.stringify(params);
  return request<API.TimTaskListResult>({
    url: '/quartz/timTask/listPage?' + queryString,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export function saveOrUpdate(params:API.TimTaskEditParams) {
  return request({
    url: '/quartz/timTask/saveOrUpdate',
    method: 'post',
    data: params,
  });
}

export function del(jobName, jobGroup) {
  return request({
    url: '/quartz/timTask/del?jobName=' + jobName + '&jobGroup=' + jobGroup,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

export function stopOrRestore(jobName, jobGroup, status) {
  return request({
    url:
      '/quartz/timTask/stopOrRestore?jobName=' +
      jobName +
      '&jobGroup=' +
      jobGroup +
      '&status=' +
      status,
    method: 'get',
  });
}

export function execution(jobName, jobGroup) {
  return request({
    url: '/quartz/timTask/execution?jobName=' + jobName + '&jobGroup=' + jobGroup,
    method: 'get',
  });
}
