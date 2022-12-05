import instance from './ajax'
const host = process.env.VUE_APP_ORDER; 
const user = process.env.VUE_APP_USER;
// console.log(process.env)
export const getToken = (data) => instance({ url: `${user}/api/1/authorization/gettoken/0`, data, method: 'get' });

export const getLogistics = (data) => instance({ url: `${host}/api/1/LogisticsCompany/GetLogisticsCompanyList`, data, method: 'post' });