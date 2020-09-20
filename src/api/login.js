// import { request } from "./request";
// export function getHomeLogin() {
//     return request({
//         url: '/login',
//         method: "post",
//         dataType: "json",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
//         },
//         params: {
//             username,
//             password
//         }
//     })
// }

import service from "./service";
export function getHomeLogin(data) {
    console.log('data', data)
    return service.request({
        url: '/public/login',
        method: "post",
        data: data
    })
}