import { HttpGetClient } from 'data/protocols/http/http-get-client';
import { HttpStatusCode } from 'data/protocols/http/http-response';
import { UnexpectedError } from 'domain/errors/unexpected-error';
import { TodoModel } from 'domain/models/todo-model';
import { LoadTodoList } from 'domain/use-cases/load-todo-list';

export class RemoteLoadTodoList implements LoadTodoList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<TodoModel[]>
  ) {
    this.url = url;
    this.httpGetClient = httpGetClient;
  }

  async loadAll(): Promise<TodoModel[] | undefined> {
    const httpResponse = await this.httpGetClient.get({ url: this.url });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.noContent:
        return [];
      default:
        throw new UnexpectedError();
    }
  }
}
