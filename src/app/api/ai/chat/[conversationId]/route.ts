import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }

    const { conversationId } = await params;
    const incomingHeaders = await headers();
    const cookie = incomingHeaders.get("cookie") || "";

    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";
    const response = await fetch(`${serverUrl}/api/ai/chat/${conversationId}`, {
      method: "GET",
      headers: {
        "Cookie": cookie,
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    // console.error("AI chat history proxy error:", error);
    return NextResponse.json({ message: error.message || "Failed to fetch chat history" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }

    const { conversationId } = await params;
    const incomingHeaders = await headers();
    const cookie = incomingHeaders.get("cookie") || "";

    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";
    const response = await fetch(`${serverUrl}/api/ai/chat/${conversationId}`, {
      method: "DELETE",
      headers: {
        "Cookie": cookie,
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    // console.error("AI chat delete proxy error:", error);
    return NextResponse.json({ message: error.message || "Failed to delete chat history" }, { status: 500 });
  }
}
