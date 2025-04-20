import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '@middlewares/error-handler.js';
import { asyncHandler } from '@middlewares/error-handler.js';
import { ICloudinaryUploadOptions } from 'types/cloudinary';
import { cloudinaryService } from '@config/claudinary.js';
import { isValidBase64Image } from '@utils/validate-base64-image.js';

// Custom request interface that extends Express Request
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?:
    | Express.Multer.File[]
    | { [fieldname: string]: Express.Multer.File[] };
}

const uploadToCloudinary = cloudinaryService.uploadImage;

/**
 * Factory function to create middleware for handling file uploads to Cloudinary
 * @param defaultOptions - Default Cloudinary upload options
 * @returns Express middleware
 */
export const handleCloudinaryUpload = (
  defaultOptions: Partial<ICloudinaryUploadOptions> = {}
) => {
  return asyncHandler(
    async (req: MulterRequest, res: Response, next: NextFunction) => {
      try {
        // Merge defaultOptions with any options provided in req.body
        const options: Partial<ICloudinaryUploadOptions> = {
          ...defaultOptions,
          ...(req.body.uploadOptions || {}),
        };

        // Case 1: Single file upload
        if (req.file) {
          const result = await uploadToCloudinary({ ...req.file }, options);
          req.body.uploadResult = result;
          return next();
        }

        // Case 2: Multiple file uploads as array
        if (req.files && Array.isArray(req.files) && req.files.length > 0) {
          const results = await Promise.all(
            req.files.map((file) => uploadToCloudinary({ ...file }, options))
          );
          req.body.uploadResults = results;
          return next();
        }

        // Case 3: Multiple file uploads as object (for fields)
        if (req.files && !Array.isArray(req.files)) {
          const results: Record<string, any> = {};

          for (const fieldname in req.files) {
            const fieldFiles = req.files[fieldname];
            if (Array.isArray(fieldFiles) && fieldFiles.length > 0) {
              results[fieldname] = await Promise.all(
                fieldFiles.map((file) =>
                  uploadToCloudinary({ ...file }, options)
                )
              );
            }
          }

          if (Object.keys(results).length > 0) {
            req.body.uploadResults = results;
            return next();
          }
        }

        // Case 4: Base64 image upload
        if (
          req.body.image &&
          typeof req.body.image === 'string' &&
          isValidBase64Image(req.body.image)
        ) {
          const result = await uploadToCloudinary(req.body.image, options);
          req.body.uploadResult = result;
          return next();
        }

        // No valid files found
        return next(new ValidationError('No valid files found for upload'));
      } catch (error) {
        return next(error);
      }
    }
  );
};
