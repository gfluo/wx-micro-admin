import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const signIn = data => {
    return request({
        url: '/admin/signIn',
        method: "post",
        data: data
    })
}

export const getUsers = query => {
    return request({
        url: '/admin/users',
        method: "get",
        params: query
    })
}

export const getOrders = query => {
    return request({
        url: '/admin/orders',
        method: "get",
        params: query
    })
}

export const getActivities = query => {
    return request({
        url: '/admin/activities',
        method: "get",
        params: query
    })
}

export const activityCreate = data => {
    return request({
        url: '/admin/activity',
        method: "post",
        data: data
    })
}

export const activityUpdate = data => {
    return request({
        url: '/admin/activity/update',
        method: "post",
        data: data
    })
}

export const activityDel = data => {
    return request({
        url: '/admin/activity/del',
        method: "post",
        data: data
    })
}

export const activityDetail = data => {
    return request({
        url: '/admin/activity/detail',
        method: "post",
        data: data
    })
}

export const activityGenerateQrcode = data => {
    return request({
        url: '/admin/qrcode/create',
        method: "post",
        data: data
    })
}