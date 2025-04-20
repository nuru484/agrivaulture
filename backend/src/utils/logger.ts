import ENV from '@config/env';
import pino from 'pino';
import pretty from 'pino-pretty';

const isProduction = ENV.NODE_ENV === 'production';

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
