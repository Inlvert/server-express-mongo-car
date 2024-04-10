const CONSTANTS = {
  DB_URL: process.env.DB_URL || 'mongodb://127.0.0.1:27017/carDB',
  PORT: process.env.PORT || 5000
}

module.exports = CONSTANTS;