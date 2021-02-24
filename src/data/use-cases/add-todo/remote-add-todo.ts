import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { TodoModel } from '../../../domain/models/todo-model';
import { AddTodoModel } from '../../../domain/models/add-todo-model';
import { AddTodo } from 'domain/use-cases/add-todo';
import { HttpStatusCode } from 'data/protocols/http/http-response';
import { HttpClient } from 'data/protocols/http/http-client';

export class RemoteAddTodo implements AddTodo {
  private readonly url: string;
  private readonly httpClient: HttpClient<any>;

  constructor(url: string, httpClient: HttpClient<TodoModel>) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async add(params: AddTodoModel): Promise<TodoModel> {
    const httpResponse = await this.httpClient.post({
      url: this.url,
      method: 'post',
      body: params,
    });
    const remoteAddTodo = httpResponse.body || {
      id: 0,
      title: '',
      description: '',
    };
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteAddTodo;
      default:
        throw new UnexpectedError();
    }
  }
}
