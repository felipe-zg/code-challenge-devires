import faker from 'faker';
import axios from 'axios';

export const mockHttpResponse = (): unknown => ({
  data: faker.random.objectElement(),
  status: faker.random.number(),
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.get.mockResolvedValue(mockHttpResponse());
  return mockedAxios;
};
