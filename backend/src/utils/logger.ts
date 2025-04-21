require('dotenv').config();
import ENV from '../config/env';
import pino from 'pino';
import pretty from 'pino-pretty';
import { assertEnv } from '../config/env';

const isProduction = process.env.NODE_ENV === 'production';

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
