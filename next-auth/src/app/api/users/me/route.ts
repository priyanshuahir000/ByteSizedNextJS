import { getDataFromToken } from "@/helpers/getDataFromToken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "User found",
      data: user,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
