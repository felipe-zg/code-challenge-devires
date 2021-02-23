import axios from 'axios';
import { HttpGetClient, HttpGetParams, HttpResponse } from 'data/protocols/http';

export class AxiosHttpClient<R = unknown> implements HttpGetClient<R> {
  async get(params: HttpGetParams): Promise<HttpResponse<R>> {
    const axiosResponse = await axios.get(params.url);
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
