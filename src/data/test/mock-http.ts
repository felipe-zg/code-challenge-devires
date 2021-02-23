import faker from 'faker';

import { HttpGetClient, HttpGetParams } from 'data/protocols/http/http-get-client';
import { HttpResponse, HttpStatusCode } from 'data/protocols/http/http-response';

export class HttpGetClientSpy<R> implements HttpGetClient<R> {
  url = '';
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async get(params: HttpGetParams): Promise<HttpResponse<R>> {
    this.url = params.url;
    return this.response;
  }
}

export const mockGetRequest = (): HttpGetParams => ({
  url: faker.internet.url(),
});
