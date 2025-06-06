require('dotenv').config();
import pino from 'pino';
import pretty from 'pino-pretty';

const isProduction = process.env.NODE_ENV === 'production';

// update the logger configuration based on the environment

const logger = pino({
  level: isProduction ? 'info' : 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: true,
      singleLine: false,
      ignore: '',
    },
  },
});

export default logger;
