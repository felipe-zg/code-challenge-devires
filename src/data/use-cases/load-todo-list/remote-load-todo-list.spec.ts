import faker from 'faker';

import { HttpGetClientSpy } from 'data/test';
import { RemoteLoadTodoList } from './load-todo-list';

type SutTypes = {
  sut: RemoteLoadTodoList;
  httpGetClientSpy: HttpGetClientSpy;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy();
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
});
