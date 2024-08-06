import { CronJob } from "cron";
import { DesiredProductTracker } from "./DesiredProductTracker";
import { sendEmail } from "./sendEmail";

const startup = async (): Promise<void> => {
  const desiredProductTracker = new CronJob("*/3 * * * *", async () => {
    const desiredProductPrice =
      await DesiredProductTracker.getInstance().getDesiredProductCurrentBuyOrderPrice();
    if (
      process.env.DESIRED_PRODUCT_PRICE &&
      desiredProductPrice &&
      desiredProductPrice >= +process.env.DESIRED_PRODUCT_PRICE
    ) {
      sendEmail(priceFormatUpdate(desiredProductPrice));
    }
  });
  desiredProductTracker.start();
};

startup().catch((error: Error | any) => {
  throw error;
});

const priceFormatUpdate = (value: number) => {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(3)}m`;
  } else if (value >= 1_000) {
    return `${(value / 1_000).toFixed(3)}k`;
  } else {
    return value.toString();
  }
};
