import nodemailer from "nodemailer";

export const sendEmail = async (desiredProductPrice: string) => {
  const {
    DESIRED_PRODUCT,
    MAILER_HOST,
    MAILER_USER,
    MAIELR_PASSWORD,
    RECEIVING_EMAIL,
    DESIRED_PRODUCT_PRICE,
  } = process.env;

  const transporter = nodemailer.createTransport({
    host: MAILER_HOST,
    port: 587,
    secure: false,
    auth: {
      user: MAILER_USER,
      pass: MAIELR_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `${DESIRED_PRODUCT} Tracker <${MAILER_USER}>`,
    to: RECEIVING_EMAIL,
    subject: `${DESIRED_PRODUCT} Update`,
    text: `The new Price of ${DESIRED_PRODUCT} is ${desiredProductPrice}, it is more than ${DESIRED_PRODUCT_PRICE}. Consider Selling`,
  });
};
