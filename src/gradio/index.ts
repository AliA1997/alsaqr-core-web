// Gradio client configuration — reads runtime config (no inlined secrets).
// Note: hfToken is a secret; prefer proxying NSFW checks through your API.
import { Client } from "@gradio/client";
import { getConfig } from "../config";

export const initializeClient = async () => {
  const { hfNsfwChecker, hfToken } = getConfig();
  return Client.connect(hfNsfwChecker!, { hf_token: hfToken } as any);
};

export const checkNsfwInImage = async (client: Client, imageUrl: string) => {
  const response = await client.predict("/chat", [imageUrl]);
  const data = (response?.data ?? []) as any[];
  if (data?.length) {
    return data[0]?.text ?? "No Response";
  }
};
