import request from '@/utils/http'

export function getCategoryAPI(id) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}
export function getCategoryFilterAPI(id) {
    return request({
        url: '/category/sub/Filter',
        params: {
            id
        }
    })
}
