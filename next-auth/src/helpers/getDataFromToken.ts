import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    if (!token) {
      throw new Error("No authentication token found. Please log in again.");
    }

    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedToken.id;
  } catch (error: any) {
    // Provide more descriptive error messages
    if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid authentication token. Please log in again.");
    } else if (error.name === "TokenExpiredError") {
      throw new Error("Your session has expired. Please log in again.");
    } else {
      throw new Error(
        error.message || "Authentication error. Please try again."
      );
    }
  }
};
