import faker from 'faker';

import { HttpGetClientSpy } from 'data/test';
import { RemoteLoadTodoList } from './load-todo-list';
import { HttpStatusCode } from 'data/protocols/http';
import { TodoModel } from 'domain/models/todo-model';
import { UnexpectedError } from 'domain/errors';

type SutTypes = {
  sut: RemoteLoadTodoList;
  httpGetClientSpy: HttpGetClientSpy<TodoModel[]>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<TodoModel[]>();
  const sut = new RemoteLoadTodoList(url, httpGetClientSpy);
  return {
    sut,
    httpGetClientSpy,
  };
};

describe('RemoteLoadTodoList', () => {
  it('should call HttpGetClient with correct url', async () => {
    const url = faker.internet.url();
    const { sut, httpGetClientSpy } = makeSut(url);
    await sut.loadAll();
    expect(httpGetClientSpy.url).toBe(url);
  });

  it('should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.loadAll();
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
