import { HttpResponse } from './http-response';

export type HttpMethod = 'post' | 'put' | 'delete';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export interface HttpClient<R = any> {
  post: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
