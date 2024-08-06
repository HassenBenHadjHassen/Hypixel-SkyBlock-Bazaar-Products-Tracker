require("dotenv").config();

const config = {
  apps: [
    {
      name: "desired-product-tracker",
      script: "./dist/src/index.js",
      max_memory_restart: "300M",
      autorestart: true,
    },
  ],
};

module.exports = config;
