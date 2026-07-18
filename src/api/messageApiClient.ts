import axios from "axios";
import type { MessageFormDto } from "@/typings";
import { axiosResponseBody } from "./agent";


export const messageApiClient = {
    loadDirectMessages: (
        params: URLSearchParams,
    ) =>
        axios.get(`/api/users/messages`, { params }).then(axiosResponseBody),
    sendDirectMessage: (
        values: MessageFormDto
    ) =>
        axios.post(`/api/messages/sendMessage`, { values }).then(axiosResponseBody),
    loadDirectMessageThreads: (
        params: URLSearchParams,
        webWorkerAccessToken?: string
    ) =>
        !!webWorkerAccessToken
            ? axios.get(`/api/users/messageThreads`, { params, headers: { Authorization: `Bearer ${webWorkerAccessToken}` } }).then(axiosResponseBody)
            : axios.get(`/api/users/messageThreads`, { params }).then(axiosResponseBody),
};