import axios from 'axios';
import { mockGetRequest } from 'data/test';
import { mockAxios } from 'infra/test';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  it('should call axios.get with correct values', async () => {
    const request = mockGetRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.get(request);
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url);
  });
});
