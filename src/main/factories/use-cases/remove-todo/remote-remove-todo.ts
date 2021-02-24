import { makeApiUrl } from '../../http/api-url-factory';
import { RemoveTodo } from 'domain/use-cases/remove-todo';
import { makeAxiosHttpClient } from 'main/factories/http/axios-http-client-factory';
import { RemoteRemoveTodo } from 'data/use-cases/remove-todo/remote-remove-todo';

export const makeRemoteRemoveTodo = (id: string): RemoveTodo =>
  new RemoteRemoveTodo(makeApiUrl(`/todos/${id}`), makeAxiosHttpClient());
