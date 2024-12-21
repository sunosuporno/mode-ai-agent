import { createXai } from "@ai-sdk/xai";
import { generateText } from "ai";
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mode } from "viem/chains";
import { http } from "viem";
import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { MODE, USDC, erc20 } from "@goat-sdk/plugin-erc20";
import { kim } from "@goat-sdk/plugin-kim";
import { sendETH } from "@goat-sdk/wallet-evm";
import { viem } from "@goat-sdk/wallet-viem";
import { createOpenAI } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const walletKey = req.headers.get("X-Wallet-Key");
    const xaiKey = req.headers.get("X-Xai-Key");
    const openaiKey = req.headers.get("X-OpenAI-Key");

    if (!walletKey) {
      throw new Error("Wallet key is required");
    }
    if (!xaiKey && !openaiKey) {
      throw new Error("Either XAI or OpenAI key is required");
    }

    const account = privateKeyToAccount(walletKey as `0x${string}`);

    const walletClient = createWalletClient({
      account: account,
      transport: http(process.env.RPC_PROVIDER_URL),
      chain: mode,
    });

    console.log("Wallet Client created:", {
      network: "Mode Mainnet",
      rpcUrl: "https://mainnet.mode.network",
      accountAddress: account.address,
    });

    let model;
    if (xaiKey) {
      const xai = createXai({ apiKey: xaiKey });
      model = xai("grok-beta");
    } else if (openaiKey) {
      const openai = createOpenAI({ apiKey: openaiKey });
      model = openai.chat("gpt-4");
    }

    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    const tools = await getOnChainTools({
      wallet: viem(walletClient),
      plugins: [sendETH(), erc20({ tokens: [USDC, MODE] }), kim()],
    });

    const result = await generateText({
      model: model!,
      tools: tools,
      maxSteps: 15,
      prompt: lastMessage.content,
      onStepFinish: (event) => {
        console.log("\n👉 Step Result:", event.toolResults);
      },
    });

    return new Response(
      JSON.stringify({
        text: result.text,
        toolResults: result.toolResults,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
