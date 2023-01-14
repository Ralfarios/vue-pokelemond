import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
// import qs from "query-string";

// const serializer = (req: AxiosRequestConfig<any>) =>
//   (req.paramsSerializer = {
//     encode: (params) => qs.stringify(params, { arrayFormat: "comma" }),
//   });

const createAPI = (
  baseURL: string = "https://pokeapi.co/api/v2",
  config: AxiosRequestConfig<any> = {}
): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    withCredentials: false,
    timeout: 325000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...config,
  });

  instance.interceptors.request.use(
    (req) => {
      // serializer(req);

      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return instance;
};

export default createAPI;
