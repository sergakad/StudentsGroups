import axios, { AxiosInstance } from "axios";

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL || "";

const $api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: `${BASE_URL}`,
  validateStatus: (status: number) => status <= 6000,
  
});

export { $api };
