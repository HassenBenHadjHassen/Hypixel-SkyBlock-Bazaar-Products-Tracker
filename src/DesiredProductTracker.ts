import axios from "./axios";
import { BazaarData } from "./types";
import dotenv from "dotenv";
dotenv.config();

export class DesiredProductTracker {
  private static instance: DesiredProductTracker;

  static getInstance = () => {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new DesiredProductTracker();
    return this.instance;
  };

  getDesiredProductData = async () => {
    try {
      const response = await axios.get<BazaarData>("/v2/skyblock/bazaar");
      const bazaarData = response.data;

      if (bazaarData.success) {
        const desiredProduct =
          bazaarData.products[process.env.DESIRED_PRODUCT as string];

        if (!desiredProduct) {
          console.log(`${process.env.DESIRED_PRODUCT} not found in products`);
          return null;
        }

        return desiredProduct;
      } else {
        console.log("API request was not successful");
        return;
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
      return;
    }
  };

  getDesiredProductCurrentBuyOrderPrice = async () => {
    try {
      const desiredProductData = await this.getDesiredProductData();

      const pricePerUnit = desiredProductData?.buy_summary[0].pricePerUnit;

      return pricePerUnit;
    } catch (error) {
      console.log(error);
      return;
    }
  };
}
