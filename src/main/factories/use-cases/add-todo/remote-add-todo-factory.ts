import { RemoteAddTodo } from 'data/use-cases/add-todo/remote-add-todo';
import { AddTodo } from 'domain/use-cases/add-todo';
import { makeApiUrl } from 'main/factories/http/api-url-factory';
import { makeAxiosHttpClient } from 'main/factories/http/axios-http-client-factory';

export const makeRemoteAddTodo = (): AddTodo =>
  new RemoteAddTodo(makeApiUrl('/todos'), makeAxiosHttpClient());
