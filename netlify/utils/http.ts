import axios, { AxiosRequestConfig } from 'axios';

type ResponseBody = Record<string, unknown> | unknown[] | string | null | undefined;

export const request = async <T>(url: string, config?: AxiosRequestConfig) => {
    return await axios.get<T>(url, config);
}

export const response = (status: number, body?: ResponseBody) => {
    return {
        statusCode: status,
        body: body ? JSON.stringify(body) : undefined,
    };
}