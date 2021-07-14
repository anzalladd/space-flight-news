import BaseService from "./BaseService";

class CommonService extends BaseService {
  getAllNews(limit, page) {
    this.endPoint = `/v3/articles/?_limit=${limit}&_start=${page}`;
    return this.get({});
  }
  getCountNews() {
    this.endPoint = "/v3/articles/count/";
    return this.get({});
  }
  getDetailNews(id) {
    this.endPoint = `/v3/articles/${id}`;
    return this.get({});
  }
}

export default new CommonService();
