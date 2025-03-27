import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

type KV = {
  test: string;
};

export async function GET() {
  const context = getRequestContext();

  const text = await context.env.MyTestKV.get("test");

  if (!text) {
    return new Response("Value not found", { status: 404 });
  }

  return new Response(text);
}

function eineFunktion(data: unknown) {}
