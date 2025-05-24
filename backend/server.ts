require('dotenv').config();
import express from 'express';
import ENV from './src/config/env';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import routes from './src/routes/index';
import {
  errorHandler,
  UnauthorizedError,
} from './src/middlewares/error-handler';
import rateLimiter from './src/middlewares/rateLimit';

const app = express();

const allowedOrigins = new Set(
  process.env.CORS_ACCESS ? process.env.CORS_ACCESS.split(',') : []
);

interface CorsCallback {
  (err: Error | null, allow: boolean): void;
}

const corsOptions = {
  origin: function (origin: string | undefined, callback: CorsCallback) {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
    } else {
      callback(
        new UnauthorizedError('Not allowed by CORS', {
          layer: 'cors',
          code: 'CORS_NOT_ALLOWED',
          context: { origin },
        }),
        false
      );
    }
  },

  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE '],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser() as express.RequestHandler);
app.use(
  morgan(':method :url :status :response-time ms') as express.RequestHandler
);
app.use(rateLimiter as express.RequestHandler);
app.use('/api/v1', routes);
app.use(errorHandler);

const port = ENV.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});

export default app;
