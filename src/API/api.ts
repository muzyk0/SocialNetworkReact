import axios from 'axios';

export type ResponseItemType = {
    'name': string
    'id': number
    'uniqueUrlName': null | string
    'photos': {
        'small': null | string
        'large': null | string
    },
    'status': null | string
    'followed': boolean
}
export type ServerData = {
    'items': ResponseItemType[]
    'totalCount': number
    'error': null | string
}
type ResponseType = {
    data: ServerData
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '458be47a-15a2-43bc-bb9e-a21974e6a059'
    }
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get<ServerData>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: ResponseType) => response.data)
    },
    follow: (id: number = 2) => {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then((response) => response.data)
    },
    unfollow: (id: number = 2) => {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then((response) => response.data)
    }
}
