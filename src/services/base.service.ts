import Axios, { AxiosInstance, AxiosResponse } from "axios";
import settings from "@/core/app-settings";
import Vue from "vue";
import { Response } from "@/models/base/response.model";

export default class BaseService<T> extends Vue {
  public apiUrl: string;
  public $http: AxiosInstance;

  constructor(controller: string) {
    super();
    this.apiUrl = settings.API_URL + controller + "/";
    this.$http = Axios;
    this.$http.defaults.headers.common['Authorization'] = settings.API_TOKEN;
  }

  public async getAll(): Promise<AxiosResponse<Response<T>>> {
    let self = this;
    return await self.$http.get(`${this.apiUrl}`);
  }

  public async getById(id: string | number): Promise<AxiosResponse<Response<T>>> {
    let self = this;
    return self.$http.get(this.apiUrl + id);
  }

  public async delete(id: string | number): Promise<AxiosResponse<Response<T>>> {
    let self = this;
    return self.$http.delete(this.apiUrl + id);
  }

  public async post(data: T): Promise<AxiosResponse<Response<T>>> {
    let self = this;
    return self.$http.post(this.apiUrl, data);
  }

  public async put(id: string | number | null, data: T): Promise<AxiosResponse<Response<T>>> {
    let self = this;
    if (id == null) {
      return self.$http.put(this.apiUrl, data);
    } else {
      return self.$http.put(this.apiUrl + id, data);
    }
  }
}
