import { HttpResponse } from './http-response';

export type HttpPostParams = {
  url: string;
  body?: any;
};

export interface HttpPostClient<R> {
  get: (params: HttpPostParams) => Promise<HttpResponse<R>>;
}
