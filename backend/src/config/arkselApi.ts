import axios from 'axios';
import logger from '../utils/logger.js';
import ENV from './env.js';

interface SmsConfig {
  method: string;
  url: string;
  headers: {
    'api-key': string;
  };
}

interface SmsParams {
  sender?: string;
  message?: string;
  recipients?: string[];
}

interface SmsResponse {
  [key: string]: any;
}

const config: SmsConfig = {
  method: 'post',
  url: ENV.ARKESEL_SMS_URL || 'https://sms.arkesel.com/api/v2/sms/send',
  headers: {
    'api-key': ENV.ARKESEL_API_KEY || (() => { throw new Error('ARKESEL_API_KEY is not defined'); })(),
  },
};

const sendSMS = async ({
  sender = ENV.ARKESEL_SENDER_ID,
  message = 'Welcome, afatech international school.',
  recipients = ['233546488115'],
}: SmsParams = {}): Promise<SmsResponse> => {
  try {
    const response = await axios({
      ...config,
      data: { sender, message, recipients },
    });
    
    if (!response.data) {
      throw new Error('No response data received');
    }

    logger.info(JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    logger.error('SMS sending failed:', error);
    throw error;
  }
};

export default sendSMS;