import { Page } from './../modal/list';
import request from './../tools/request'

export const loginUser = (params:object) => request('/login/user', 'post', params);

export const getList = (params:object):Promise<Page> => request('xuanfu-manage/manage/leadShot/list', 'get', params);