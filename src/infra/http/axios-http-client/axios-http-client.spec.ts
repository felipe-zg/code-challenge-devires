import axios from 'axios';
import { mockGetRequest } from 'data/test';
import { mockAxios, mockHttpResponse } from 'infra/test';
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

  it('should return correct response on axios.get', async () => {
    const { sut, mockedAxios } = makeSut();
    const httpResponse = await sut.get(mockGetRequest());
    const axiosResponse = await mockedAxios.get.mock.results[0].value;
    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    });
  });

  it('should return correct error on axios.get', async () => {
    const { sut, mockedAxios } = makeSut();
    mockedAxios.get.mockRejectedValueOnce({
      response: mockHttpResponse(),
    });
    const promise = sut.get(mockGetRequest());
    expect(promise).toEqual(mockedAxios.get.mock.results[0].value);
  });
});
