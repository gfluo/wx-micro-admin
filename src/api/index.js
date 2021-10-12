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