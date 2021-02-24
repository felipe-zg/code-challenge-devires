import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { RemoveTodo } from 'domain/use-cases/remove-todo';
import { HttpClient } from 'data/protocols/http/http-client';
import { HttpStatusCode } from 'data/protocols/http/http-response';

export class RemoteRemoveTodo implements RemoveTodo {
  private readonly url: string;
  private readonly httpClient: HttpClient<Record<string, unknown>>;

  constructor(url: string, httpClient: HttpClient<Record<string, unknown>>) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async remove(): Promise<Record<string, unknown>> {
    const httpResponse = await this.httpClient.delete({
      url: this.url,
      method: 'delete',
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse;
      default:
        throw new UnexpectedError();
    }
  }
}
