import axios from "axios";
import { ProfileType } from "../redux/profile-reducer";

export type ResponseItemType = {
    name: string;
    id: number;
    uniqueUrlName: null | string;
    photos: {
        small: null | string;
        large: null | string;
    };
    status: null | string;
    followed: boolean;
};
export type ServerData<T = []> = {
    items: T;
    totalCount: number;
    error: null | string;
};
export type ResponseType<T = {}> = {
    resultCode: number;
    messages: Array<string>;
    fieldsErrors: Array<string>;
    data: T;
};

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY,
    },
});

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance
            .get<ServerData<ResponseItemType[]>>(
                `users?page=${currentPage}&count=${pageSize}`
            )
            .then((response) => response.data);
    },
    follow: (id: number = 2) => {
        return instance.post(`follow/${id}`).then((response) => response.data);
    },
    unfollow: (id: number = 2) => {
        return instance
            .delete(`follow/${id}`)
            .then((response) => response.data);
    },
};

export const profileAPI = {
    getProfile: (userId: number) => {
        return instance.get<ProfileType>(`profile/${userId}`);
    },
    getStatus: (userId: string) => {
        return instance.get<string>(`/profile/status/${userId}`);
    },
    updateStatus: (status: string) => {
        return instance.put(`/profile/status/`, {
            status: status,
        });
    },
    savePhoto: (photoFile: File) => {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<ResponseType<ResponseItemType>>(
            `/profile/photo`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
    },
    saveProfile: (values: ProfileType) => {
        return instance.put<ResponseType<ProfileType>>(`/profile`, values);
    },
};

type AuthResponseType = {
    data: {
        id: number;
        login: string;
        email: string;
    };
    messages: string[];
    fieldsErrors: [];
    resultCode: number;
};

export const authAPI = {
    me: () => {
        return instance.get<AuthResponseType>(`auth/me`);
    },
    login: (
        email: string,
        password: string,
        rememberMe: boolean = false,
        captcha: string | null = null
    ) => {
        return instance.post<AuthResponseType>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        });
    },
    logout: () => {
        return instance.delete(`auth/login`);
    },
};
export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get<{ url: string }>(`security/get-captcha-url`);
    },
};
