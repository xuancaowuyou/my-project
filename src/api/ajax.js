import axios from 'axios'

const instance = axios.create({
    baseURL: '',
    timeout: 5000,
    headers: {
        'content-type': 'application/json',
        'user_token': 'D5A8C1B6A5E542A4A22A32EEE03E71F33BDAA84FCA7D08248F1B89D2B9E7D2741D7664551F7F704178F18EF6C52571164836D82330350A071442405930961C1BD9692811A51DE78FF026F46A6B5E26120B5154F46E9AE2529A216DE58EF680425BD0B34401747466303227DA05C3DCE4A13EBDC734C86B816B748EA2D76FC0301200B2E9FF3FE1DE6378C3A005BF7FA427A318FC554500C02CBA10234D3C641FE4E1FD3889C29C9C517BB0B5129DF21FD9ECA96BE74DA3D410970FF06592E4CF8691D43B9CBEB8E80EAF39509CCF1FBFA5FBCF2B6D3AA7EA4AD8A6F01B9AE5BDECAF3FF7C2C817A6E14A4C1650AAA28B53AC3D833451C2271119E9F649C5B6C108E92D074CEFB6F46EB54678F6BA991F3091798C37FD91AA33D9BF9475050A5D126556D9EA88F8D46BD6FFCCFAE4C0DBC80A60D8502D770E2D2810195A057ADE4FE85803376FC0B5'
    }
})
//请求拦截器
instance.interceptors.request.use((config) => { 
    config.headers.access_token = localStorage.getItem('accessToken')
    return config;
}, error => {
    return Promise.reject(error)
})
//2、拦截响应
instance.interceptors.response.use(response => {
    return response
 },error => {
    return Promise.reject(error)
})

export default instance;