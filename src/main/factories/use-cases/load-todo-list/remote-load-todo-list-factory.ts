import { RemoteLoadTodoList } from 'data/use-cases/load-todo-list/load-todo-list';
import { TodoModel } from 'domain/models/todo-model';
import { LoadTodoList } from 'domain/use-cases/load-todo-list';
import { AxiosHttpClient } from 'infra/http/axios-http-client/axios-http-client';
import { makeApiUrl } from 'main/factories/http/api-url-factory';
import { makeAxiosHttpClient } from 'main/factories/http/axios-http-client-factory';

export const makeRemoteLoadTodoList = (): LoadTodoList => {
  return new RemoteLoadTodoList(
    makeApiUrl('/todos'),
    makeAxiosHttpClient() as AxiosHttpClient<TodoModel[]>
  );
};
