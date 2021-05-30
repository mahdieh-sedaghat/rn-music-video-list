import axios, {AxiosPromise} from 'axios';

class MusicVideoAPI {
  /**
   * get music video list
   */
  static getMusicVideoList(): AxiosPromise<any> {
    return axios({
      method: 'GET',
      url: 'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json',
    });
  }
}

export default MusicVideoAPI;
