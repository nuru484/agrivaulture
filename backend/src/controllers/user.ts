import { Request, Response, NextFunction } from "express";
import prisma from "../config/prismaClient";
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from "../middlewares/error-handler";
import { HTTP_STATUS_CODES } from "../config/constants";
import { IUserResponseData } from "types/user-profile.types";

/**
 * Get total number of users
 */
const getTotalUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;
    if (!userId || req.user?.role !== "ADMIN") {
      throw new UnauthorizedError("Unauthorized, admin access required");
    }

    const totalUsers = await prisma.user.count();

    res.status(HTTP_STATUS_CODES.OK).json({
      message: "Total users retrieved successfully",
      data: { total: totalUsers },
    });
  }
);

/**
 * Get list of users
 */
const getUsersList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;
    if (!userId || req.user?.role !== "ADMIN") {
      throw new UnauthorizedError("Unauthorized, admin access required");
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        region: true,
        city: true,
        address: true,
        bio: true,
        profilePicture: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const response: IUserResponseData[] = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      profilePicture: user.profilePicture,
      bio: user.bio,
      address: user.address,
      role: user.role,
      region: user.region,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));

    res.status(HTTP_STATUS_CODES.OK).json({
      message: "Users list retrieved successfully",
      data: response,
    });
  }
);

/**
 * Update user role
 */
const updateUserRole = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const { role } = req.body;
    const userId = req.user?.id;

    if (!userId || req.user?.role !== "ADMIN") {
      throw new UnauthorizedError("Unauthorized, admin access required");
    }

    if (!["FARMER", "ADMIN"].includes(role)) {
      throw new NotFoundError("Invalid role provided");
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { role },
    });

    const response: IUserResponseData = {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      city: updatedUser.city,
      profilePicture: updatedUser.profilePicture,
      bio: updatedUser.bio,
      address: updatedUser.address,
      role: updatedUser.role,
      region: updatedUser.region,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: "User role updated successfully",
      data: response,
    });
  }
);

/**
 * Delete a user
 */
const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId || req.user?.role !== "ADMIN") {
      throw new UnauthorizedError("Unauthorized, admin access required");
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: "User deleted successfully",
    });
  }
);

export { getTotalUsers, getUsersList, updateUserRole, deleteUser };
