# Lemonade-Mobile-APP-V3

<!-- ## Badges

[![USES REACT NATIVE](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) 
[![USES EXPO](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![USES GLUESTACK](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) -->

## Summary

Lemonade Payments is a digital payment platform designed for seamless and secure transactions across Africa. The mobile application allows users to manage their finances efficiently through various features such as creating accounts, authentication, home screens, transfers, and more. The platform emphasizes privacy, security, and user support.

The project is managed on a pivotal tracker board. [View the board here](https://github.com/orgs/Lemonade-Payments/projects/6/views/1)

## Features

**Onboarding**

1. Users can create an account.
2. Users can set a passcode/pin during account creation.

**Authentication**

1. Users can log into their account.
2. Users can use fingerprint login.
3. Users can reset their password.
4. Users can use Google Authenticator for two-factor authentication.

**Home**

1. Home screen displays user profile and wallet balance.
2. Home screen shows paginated list of recent transactions.
3. Home screen shows available offers.
4. Notifications are displayed on the home screen.

**Shortcuts**

1. Users can schedule transfers.
2. Users can buy goods.
3. Users can pay bills.
4. Users can access their QR code.
5. Users can request money.

**Transfers**

1. Users can make Lemonade transfers.
   - Fetch and create favorites.
   - View recent wallet transfer transactions.
   - Set privacy settings for transfers.
2. Users can make bank transfers.
   - Fetch and create favorites.
   - View recent bank transactions.
   - Set privacy settings for transfers.
3. Users can send money via mobile money transfer.
   - View available channels.
   - Fetch and create favorites.
   - View recent wallet transfer transactions.
   - Set a 4-digit transaction pin.
   - Set privacy settings for transfers.
4. Users can pay bills and buy goods via mobile money transfer.
   - Fetch and create favorites.
   - View recent wallet transfer transactions.
   - Set privacy settings for transfers.
5. Users can buy airtime.
   - Buy airtime endpoint.
   - Fetch and create favorites.
   - View recent wallet transfer transactions.

**Settings**

1. Users can manage login settings.
   - Face ID and fingerprint ID.
2. Users can manage security settings.
3. Users can call support.
4. Users can view FAQs.
5. Users can visit the website.
6. Users can view terms of service.
7. Users can view the privacy policy.
8. Users can log out.

**Account**

1. Users can view account details.
   - Fetch account details showing total amount held in default and business accounts.
2. Users can add a new account.
   - Endpoint with account threshold feature.

**Transactions**

1. Users can view a list of transactions.
   - Paginated transactions endpoint with filters (month, all, private, public).
   - View total in and total out data.
   - Export/download transactions.
2. Users can view transaction analytics.
   - Daily expenses graph with month filter.
   - Distributed expenses pie chart with month filter.
   - Total expenses with month filter.
   - Daily income graph with month filter.
   - Distributed income pie chart with month filter.
   - Total income with month filter.

**Profile**

1. Users can view and edit their profile settings.
   - Fetch profile details.

**Notifications** (coming soon)  
**Preferences** (coming soon)

## Pre-requisites

- **Expo CLI**: Install the Expo CLI globally using the command:
  ```sh
  npm install -g expo-cli
  ```
- Git

## Getting Started

- Clone this repository to your computer
  ```
  git clone <repository-url>
  ```
- cd into this folder:
  ```
  Lemonade-Mobile-APP-V3
  ```
- Install Dependancies:
  `   yarn install
   `
  Run the application

---

```
    npx expo start
```

## Authors

- **Neville Oroni** -**Sharon Chang'ach**

## License

This project is licensed under the MIT license. See [LICENSE](https://github.com/kathy254/Questioner-UI/blob/master/LICENSE) for details.

## Contribution

Fork this repository, contribute, and create a pull request.

