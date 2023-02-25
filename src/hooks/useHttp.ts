import axios, { AxiosRequestConfig } from "axios";
import { IResponse } from '../interfaces/app.interfaces';

export default function useHttp() {
  return {
    async get<T>(url: string, config?: AxiosRequestConfig<any>): Promise<IResponse<T>> {
      try {
        const { data } = await axios.get<T>(url, config);
        return { error: false, data };
      } catch (error) {
        return {error : true, data: null };
      }
    },
  };
}