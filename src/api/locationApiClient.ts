import axios from "axios";
import { axiosResponseBody } from "./agent";
import { getConfig } from "../config";

export const locationApiClient = {
    getIpAddress: () =>
        axios.get(getConfig().locationApiUrl!).then(axiosResponseBody),
    reverseLocateAddress: (lat: number, long: number) =>
        axios.get(`${getConfig().locationReverseApiUrl ?? ''}?lat=${lat}&lon=${long}&format=geojson`).then(axiosResponseBody),
}