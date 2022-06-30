import Axios, { AxiosInstance, AxiosResponse } from "axios";
import settings from "@/core/app-settings";
import Vue from "vue";

export default class BaseService<T> extends Vue {
  public apiUrl: string;
  public $http!: AxiosInstance;
  
  constructor(controller: string) {
    super();
    this.apiUrl = settings.API_URL + controller + "/";
  }

  public async getAll(): Promise<AxiosResponse<T>> {
    let self = this;
    return self.$http.get(`${this.apiUrl}`);
  }

  public async getById(id: string | number): Promise<AxiosResponse<T>> {
    let self = this;
    return self.$http.get(this.apiUrl + id);
  }

  public async delete(id: string | number): Promise<AxiosResponse<T>> {
    let self = this;
    return self.$http.delete(this.apiUrl + id);
  }

  public async post(data: T): Promise<AxiosResponse<T>> {
    let self = this;
    return self.$http.post(this.apiUrl, data);
  }

  public async put(id: string | number, data: T): Promise<AxiosResponse<T>> {
    let self = this;
    return self.$http.put(this.apiUrl + id, data);
  }
}
