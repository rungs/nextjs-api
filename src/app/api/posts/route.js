import { NextRequest, NextResponse } from "next/server";

const URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  const res = await fetch(URL);
  const posts = await res.json();

  return NextResponse.json(posts);
}

export async function POST() {
  const url = process.env.URL;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_secret: process.env.CLIENT_SECRET,
        client_id: process.env.CLIENT_ID,
        scope: process.env.SCOPE,
      }),
    });

    const res = await response.json();
    console.log("res", res);

    return NextResponse.json(res);
  } catch (error) {
    console.error("There was a problem with the axios request:", error);
  }
}
