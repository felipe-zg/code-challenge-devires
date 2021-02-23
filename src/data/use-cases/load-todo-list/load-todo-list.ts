import { HttpGetClient, HttpStatusCode } from 'data/protocols/http';
import { UnexpectedError } from 'domain/errors';
import { TodoModel } from 'domain/models/todo-model';

export class RemoteLoadTodoList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<TodoModel[]>
  ) {
    this.url = url;
    this.httpGetClient = httpGetClient;
  }

  async loadAll(): Promise<void> {
    const httpResponse = await this.httpGetClient.get({ url: this.url });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      default:
        throw new UnexpectedError();
    }
  }
}
