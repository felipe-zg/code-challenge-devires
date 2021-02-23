import faker from 'faker';

import { HttpGetClientSpy } from 'data/test';
import { RemoteLoadTodoList } from './load-todo-list';

describe('RemoteLoadTodoList', () => {
  it('should call HttpGetClient with correct url', async () => {
    const url = faker.internet.url();
    const httpGetClientSpy = new HttpGetClientSpy();
    const sut = new RemoteLoadTodoList(url, httpGetClientSpy);
    await sut.loadAll();
    expect(httpGetClientSpy.url).toBe(url);
  });
});
