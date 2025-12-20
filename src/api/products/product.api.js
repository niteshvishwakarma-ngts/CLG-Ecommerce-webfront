import ApiRoutes from "@/app/configs/endpoints.config";
import HttpClient from "../index.api";

class Product extends HttpClient {
  constructor() {
    super();
  }

  getTopPicks = async () => {
    const res = await this.get(ApiRoutes.products.topPicks.Endpoint);
    console.log("API INSIDE product.api 👉", res); // 🔥 PROOF
    return res;
  };

  getProductDetails = async (id) => {
    return this.get(`${ApiRoutes.products.details.Endpoint}/${id}`);
  };
}

export default new Product();
