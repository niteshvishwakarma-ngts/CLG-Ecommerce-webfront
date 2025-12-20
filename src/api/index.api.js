import { getTokenLocal } from "@/utils/token.util";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

class HttpClient {
  constructor() {
    this.instance = axios.create({
      baseURL: baseURL || "http://localhost:3000/api",
      timeout: 15000,
    });

    // REQUEST
    this.instance.interceptors.request.use(
      (config) => {
        const token = getTokenLocal();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config; // 🔴 MUST RETURN
      },
      (error) => Promise.reject(error)
    );

    // RESPONSE
    this.instance.interceptors.response.use(
      (response) => {
        // 🔴 MUST RETURN DATA
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // ===== HTTP METHODS =====
  get(url, config = {}) {
    return this.instance.get(url, config);
  }

  post(url, data, config = {}) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config = {}) {
    return this.instance.put(url, data, config);
  }

  delete(url, config = {}) {
    return this.instance.delete(url, config);
  }
}

export default HttpClient;
