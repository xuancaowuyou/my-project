import ajax from './ajax'
const host = process.env.VUE_ORDER;
const user = process.env.VUE_USER

export const getToken = (data) => ajax({ url: `${user}/api/1/authorization/gettoken/0`, data, method: 'get' });

export const getLogistics = (data) => ajax({ url: `${host}/api/1/LogisticsCompany/GetLogisticsCompanyList`, data, method: 'post' });