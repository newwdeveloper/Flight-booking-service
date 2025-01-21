// /config/server-config.js
const dotenv = require("dotenv");

dotenv.config(); // This loads the environment variables from the .env file

const ServerConfig = {
  PORT: process.env.PORT || 3000, // Fallback to 3000 if PORT is not in .env
  FLIGHT_SERVICE: process.env.FLIGHT_SERVICE,
};

module.exports = ServerConfig;
