
# Hypixel Bazaar Price Alert

  

This Node.js application monitors the price of a specific item on the Hypixel Bazaar and sends an email notification when the item's price reaches your desired threshold. It is designed to help players stay informed about market fluctuations and make timely decisions based on the latest prices.

  

## Features

  

-  **Real-Time Price Tracking:** Continuously checks the current price of a specified item on the Hypixel Bazaar.

-  **Custom Alerts:** Configurable price thresholds to trigger email notifications.

-  **Email Notifications:** Sends alerts via email when the item's price meets or falls below the desired value.

-  **Easy Configuration:** Simple setup with environment variables for configuring the item, desired price, and email settings.

  

## Installation

  

1. Clone the repository:

  

````bash
git clone https://github.com/HassenBenHadjHassen/Hypixel-SkyBlock-Bazaar-Products-Tracker.git
````

  

2. Navigate to the project directory:
````bash
cd Hypixel-SkyBlock-Bazaar-Products-Tracker
````
  

3. Install dependencies:

  

````bash
npm install
````

  

4. Set up environment variables in a .env file:

  

````bash
cp .env.example .env
````

4.1. Update The Values
  ````bash
MAILER_HOST=

MAILER_USER=

MAILER_USER_2=

MAIELR_PASSWORD=

RECEIVING_EMAIL=

DESIRED_PRODUCT=

DESIRED_PRODUCT_PRICE=
````

5. Run the application:

````bash
npm start
````

  

## Usage

- The script will automatically start monitoring the price of the specified item.

- When the item's price reaches the desired value, an email alert will be sent to the configured email address.

  

## Contributing

Feel free to submit issues, feature requests, or pull requests to enhance the functionality of this application.

  

## License

This project is licensed under the MIT License