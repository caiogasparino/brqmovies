import { axiosInstance } from "app/shared/libs/axios/client";
import { AxiosRequestConfig } from "axios";

export type ParamsClientType = AxiosRequestConfig["params"];
export type HeadersClientType = AxiosRequestConfig["headers"];

type AxiosClientProps = {
    method?: "get" | "post" | "put";
    url: string;
    params?: ParamsClientType;
    headers?: HeadersClientType;
};

export async function axiosClient({
    method = "get",
    url,
    params,
    headers,
}: AxiosClientProps) {
    const { data } = await axiosInstance({
        method,
        url,
        params,
        headers,
    });

    return data;
}
