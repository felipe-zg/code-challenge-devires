import { makeApiUrl } from '../../http/api-url-factory';
import { AddTodo } from 'domain/use-cases/add-todo';
import { RemoteAddTodo } from 'data/use-cases/add-todo/remote-add-todo';
import { makeAxiosHttpClient } from 'main/factories/http/axios-http-client-factory';
import { TodoModel } from 'domain/models/todo-model';
import { HttpClient } from 'data/protocols/http/http-client';

export const makeRemoteAddTodo = (): AddTodo =>
  new RemoteAddTodo(
    makeApiUrl('/todos'),
    makeAxiosHttpClient() as HttpClient<TodoModel>
  );
