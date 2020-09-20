import service from "./service";
export function getHomeList(data) {
   
    return service.request({
        url: '/backend/img/list',
        method: "post",
        data: data
    })
}
export function getListAdd(data) {
    
    return service.request({
        url: '/backend/img/list/add',
        method: "post",
        data: data
    })
}
export function getListDelete(data) {
   
    return service.request({
        url: '/backend/img/list/delete',
        method: "post",
        data: data
    })
}
export function editList(data) {
   
    return service.request({
        url: '/backend/img/list',
        method: "put",
        data: data
    })
}

export function uploadFile(data) {
    return service.request({
        url: '/backend/img/upload',
        method: "post",
        data: data
    })
}
export function pictureview(data) {
   
    return service.request({
        url: '/backend/img/imgsearch',
        method: "post",
        data: data
    })
}