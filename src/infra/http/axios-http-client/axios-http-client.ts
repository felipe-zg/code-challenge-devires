import axios from 'axios';
import { HttpGetParams } from 'data/protocols/http';

export class AxiosHttpClient {
  async get(params: HttpGetParams): Promise<void> {
    axios.get(params.url);
  }
}
