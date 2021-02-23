import axios, { AxiosResponse } from 'axios';
import { HttpGetClient, HttpGetParams, HttpResponse } from 'data/protocols/http';

export class AxiosHttpClient<R = unknown> implements HttpGetClient<R> {
  async get(params: HttpGetParams): Promise<HttpResponse<R>> {
    let axiosResponse: AxiosResponse<R>;
    try {
      axiosResponse = await axios.get(params.url);
    } catch (error) {
      axiosResponse = error.response;
    }
    return this.adapt(axiosResponse);
  }

  private adapt(axiosResponse: AxiosResponse): HttpResponse<R> {
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
