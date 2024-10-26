import { NextResponse } from "next/server";

export function middleware() {
  try {
    const currentDate = new Date();
    const cutoffDate = new Date(currentDate.getFullYear(), 9, 31);

    if (currentDate > cutoffDate) {
      return NextResponse.json(
        {
          error: "Access Denied: Testing Phase Ended!",
        },
        { status: 403 }
      );
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

export const config = {
  matcher: "/:path*",
};
