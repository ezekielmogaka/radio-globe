import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 },
    );
  }

  try {
    // Validate URL to prevent SSRF attacks
    const targetUrl = new URL(decodeURIComponent(url));

    // Only allow HTTP and HTTPS protocols
    if (!["http:", "https:"].includes(targetUrl.protocol)) {
      return NextResponse.json({ error: "Invalid protocol" }, { status: 400 });
    }

    // Fetch the audio stream
    const response = await fetch(targetUrl.toString(), {
      headers: {
        "User-Agent": "RadioGlobeNext/1.0",
        Accept: "audio/mpeg, audio/mp4, audio/aac, audio/ogg, audio/wav, */*",
        Range: request.headers.get("range") || "",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch audio: ${response.status}` },
        { status: response.status },
      );
    }

    // Get the content type
    const contentType = response.headers.get("content-type") || "audio/mpeg";

    // Create response with proper CORS headers
    const proxyResponse = new NextResponse(response.body, {
      status: response.status,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        "Access-Control-Allow-Headers": "Range, Content-Type",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Accept-Ranges": "bytes",
      },
    });

    // Copy relevant headers from the original response
    const headersToProxy = [
      "content-length",
      "content-range",
      "accept-ranges",
      "last-modified",
      "etag",
    ];

    headersToProxy.forEach((header) => {
      const value = response.headers.get(header);
      if (value) {
        proxyResponse.headers.set(header, value);
      }
    });

    return proxyResponse;
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Failed to proxy audio stream" },
      { status: 500 },
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Range, Content-Type",
    },
  });
}
