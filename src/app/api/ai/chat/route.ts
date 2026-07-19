import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }

    const payload = await request.json();
    const incomingHeaders = await headers();
    const cookie = incomingHeaders.get("cookie") || "";

    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";
    const response = await fetch(`${serverUrl}/api/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookie,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    // console.error("AI chat proxy error:", error);
    return NextResponse.json({ message: error.message || "Failed to process chat" }, { status: 500 });
  }
}
