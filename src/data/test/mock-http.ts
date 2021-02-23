import { HttpGetClient, HttpGetParams } from 'data/protocols/http';

export class HttpGetClientSpy implements HttpGetClient {
  url = '';

  async get(params: HttpGetParams): Promise<void> {
    this.url = params.url;
  }
}
