import { computed } from "vue";
import axios from "axios";

// 請求網址
const http = import.meta.env.BASE_URL + "webapi";

// 網址處理
const getUrl = (url) => {
  if (!url) {
    return "";
  }
  return `${http}${url}`;
};

// Post請求
const post = (url = "", data = {}) => {
  let theUrl = getUrl(url);

  let headers = {
    "Content-Type": "application/json"
  };

  return axios({
    method: "post",
    headers,
    url: theUrl,
    data
  }).then((response) => {
    if (response) {
      return response;
    } else {
      return Promise.reject();
    }
  });
};

export { post };
