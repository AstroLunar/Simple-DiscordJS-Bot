# Simple DiscordJS Bot

This repository contains the code to get a simple Discord.js bot up and running with slash commands as well as an ExpressJS webserver.

## Credits
Please leave some form of credits to AstroLunar that is publicly visible on your project somewhere, This resource is completely free to use and that's all I ask you do to support my work, Thank you! :)

## Installation

To get started with this project, you will need to have the following software installed:

- Node.js (v16.0.0 or higher)

Once you have Node.js installed, you can clone this repository by running the following command:
```
git clone https://github.com/AstroLunar/Simple-DiscordJS-Bot
```
Next, navigate to the project directory and install the required dependencies by running the following command:
```
npm i
```
## Configuration

Before you can run the bot, you will need to create a Discord bot and obtain a bot token. You can follow the instructions in [this guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) to create a bot and obtain a token.

Once you have your bot token, create a new file in the project directory called `config.json` and add the following code to it:
```json
{
    "webserver": {
        "port":3000
    },
    "bot": {
        "token":"YOUR_BOT_TOKEN_HERE"
    }
}
```
Replace `YOUR_BOT_TOKEN_HERE` with your actual bot token.

## Usage

To run the bot, use the following command:
```
node index.js
```
This will start both the Discord Bot and the ExpressJS webserver.

## Contributing

If you find any issues with the code or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
