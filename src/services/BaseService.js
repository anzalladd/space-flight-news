import axios from "axios";
import configCommon from "@/config/common";

class BaseService {
  constructor() {
    this.endPoint = "";
    this.setBaseUrl();
  }
  setBaseUrl() {
    let base = configCommon.API.main;
    this.http = axios.create({
      headers: {
        Accept: "application/json",
      },
      baseURL: base,
    });
  }
  get(options) {
    return this.http.get(this.endPoint, options);
  }
}

export default BaseService;
