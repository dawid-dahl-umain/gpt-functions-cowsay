import { NextResponse } from "next/server";
import { say } from "cowsay";
import type { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  const cowsayText = request.nextUrl.searchParams.get("cowsay") || "";

  console.log("The cow says: \n ", say({ text: cowsayText }));

  return NextResponse.json(
    {
      cowsay: say({ text: cowsayText }),
      body: request.body,
      path: request.nextUrl.pathname,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    }
  );
};
