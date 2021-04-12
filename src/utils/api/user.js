import _http from './_http'
// 用户 - 手机号登录
export const loginPhoneReq = (data) => _http('/login/cellphone', data)