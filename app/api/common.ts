import { NextRequest } from "next/server";

const DEFAULT_PROTOCOL = "http";
const PROTOCOL = process.env.PROTOCOL ?? DEFAULT_PROTOCOL;
const BASE_URL = process.env.OPENAI_API_BASE_URL;

export async function requestOpenai(req: NextRequest) {
  const apiKey = req.headers.get("token");
  //const openaiPath = req.headers.get("path");
  const openaiPath = "";

  //console.log("[Proxy] ", openaiPath);

  return fetch(`${PROTOCOL}://${BASE_URL}/${openaiPath}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${apiKey}`,
    },
    method: req.method,
    body: req.body,
  });
}
