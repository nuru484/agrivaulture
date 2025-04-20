import multer, { Multer, Options } from 'multer';

const multerConfig: Options = {
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB in bytes
  },
};

const upload: Multer = multer(multerConfig);

export default upload;
