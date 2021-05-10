import axios from 'axios';
import {ProfileType} from '../redux/profile-reducer';

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
        return instance.post(`follow/${id}`)
            .then((response) => response.data)
    },
    unfollow: (id: number = 2) => {
        return instance.delete(`follow/${id}`)
            .then((response) => response.data)
    },
}




export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus: (userId: string) => {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put(`/profile/status/`, {
            status: status
        })
    }
}


type AuthResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    'messages': [],
    'fieldsErrors': [],
    'resultCode': 0
}

export const authAPI =  {
    me: () => {
        return instance.get<AuthResponseType>(`auth/me`)
    },
    login: (email: string,password: string,rememberMe: boolean,) => {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
        })
    },
}

