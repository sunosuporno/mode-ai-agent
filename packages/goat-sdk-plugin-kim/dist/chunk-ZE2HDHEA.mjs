import {
  __name
} from "./chunk-PAWJFY3S.mjs";

// src/parameters.ts
import { createToolParameters } from "@goat-sdk/core";
import { z } from "zod";
var GetSwapRouterAddressParams = class extends createToolParameters(z.object({})) {
  static {
    __name(this, "GetSwapRouterAddressParams");
  }
};
var pathSchema = z.object({
  tokenIn: z.string().describe("Address of the first token in the path"),
  tokenOut: z.string().describe("Address of the last token in the path"),
  intermediateTokens: z.array(z.string()).describe("Addresses of the intermediate tokens in the path"),
  fees: z.array(z.number()).describe("Fee tiers between each hop")
});
var ExactInputParams = class extends createToolParameters(z.object({
  path: pathSchema.describe("The path of the swap"),
  recipient: z.string().describe("Address to receive the output tokens"),
  deadline: z.number().describe("The deadline for the swap"),
  amountIn: z.string().describe("The amount of tokens to swap in"),
  amountOutMinimum: z.string().describe("The minimum amount of tokens to receive")
})) {
  static {
    __name(this, "ExactInputParams");
  }
};
var ExactOutputParams = class extends createToolParameters(z.object({
  path: z.any().describe("The path of the swap"),
  recipient: z.string().describe("The address to receive the output tokens"),
  deadline: z.number().describe("The deadline for the swap"),
  amountOut: z.string().describe("The amount of tokens to swap out"),
  amountInMaximum: z.string().describe("The maximum amount of tokens to swap in")
})) {
  static {
    __name(this, "ExactOutputParams");
  }
};
var ExactInputSingleParams = class extends createToolParameters(z.object({
  tokenIn: z.string().describe("The address of the token to swap in"),
  tokenOut: z.string().describe("The address of the token to swap out"),
  recipient: z.string().describe("The address to receive the output tokens"),
  deadline: z.number().optional().default(60 * 60 * 24).describe("The deadline for the swap in seconds from now"),
  amountIn: z.string().describe("The amount of tokens to swap in in base units"),
  amountOutMinimum: z.string().describe("The minimum amount of tokens to receive in base units"),
  limitSqrtPrice: z.string().describe("The limit price for the swap")
})) {
  static {
    __name(this, "ExactInputSingleParams");
  }
};
var ExactOutputSingleParams = class extends createToolParameters(z.object({
  tokenIn: z.string().describe("The token to swap in"),
  tokenOut: z.string().describe("The token to swap out"),
  recipient: z.string().describe("The address to receive the output tokens"),
  deadline: z.number().describe("The deadline for the swap"),
  amountOut: z.string().describe("The amount of tokens to swap out"),
  amountInMaximum: z.string().describe("The maximum amount of tokens to swap in"),
  limitSqrtPrice: z.string().describe("The limit price for the swap")
})) {
  static {
    __name(this, "ExactOutputSingleParams");
  }
};
var DefaultConfigurationForPoolParams = class extends createToolParameters(z.object({
  poolAddress: z.string().describe("The address of the pool")
})) {
  static {
    __name(this, "DefaultConfigurationForPoolParams");
  }
};
var PoolByPairParams = class extends createToolParameters(z.object({
  token0: z.string().describe("The first token in the pair"),
  token1: z.string().describe("The second token in the pair")
})) {
  static {
    __name(this, "PoolByPairParams");
  }
};
var MintParams = class extends createToolParameters(z.object({
  token0: z.string().describe("The first token in the pair"),
  token1: z.string().describe("The second token in the pair"),
  tickLower: z.number().describe("The lower tick for the liquidity"),
  tickUpper: z.number().describe("The upper tick for the liquidity"),
  amount0Desired: z.string().describe("The amount of token0 to add"),
  amount1Desired: z.string().describe("The amount of token1 to add"),
  amount0Min: z.string().describe("The minimum amount of token0 to add"),
  amount1Min: z.string().describe("The minimum amount of token1 to add"),
  recipient: z.string().describe("The address to receive the output tokens"),
  deadline: z.number().describe("The deadline for the swap")
})) {
  static {
    __name(this, "MintParams");
  }
};
var IncreaseLiquidityParams = class extends createToolParameters(z.object({
  token0: z.string().describe("The first token in the pair"),
  token1: z.string().describe("The second token in the pair"),
  tokenId: z.string().describe("The token id of the liquidity"),
  amount0Desired: z.string().describe("The amount of token0 to add"),
  amount1Desired: z.string().describe("The amount of token1 to add"),
  amount0Min: z.string().describe("The minimum amount of token0 to add"),
  amount1Min: z.string().describe("The minimum amount of token1 to add"),
  deadline: z.number().describe("The deadline for the swap")
})) {
  static {
    __name(this, "IncreaseLiquidityParams");
  }
};
var DecreaseLiquidityParams = class extends createToolParameters(z.object({
  token0: z.string().describe("The first token in the pair"),
  token1: z.string().describe("The second token in the pair"),
  tokenId: z.string().describe("The token id of the liquidity"),
  liquidity: z.string().describe("The amount of liquidity to remove"),
  amount0Min: z.string().describe("The minimum amount of token0 to remove"),
  amount1Min: z.string().describe("The minimum amount of token1 to remove"),
  deadline: z.number().describe("The deadline for the swap")
})) {
  static {
    __name(this, "DecreaseLiquidityParams");
  }
};
var CollectParams = class extends createToolParameters(z.object({
  tokenId: z.string().describe("The token id of the liquidity"),
  token0: z.string().describe("The first token in the pair"),
  token1: z.string().describe("The second token in the pair"),
  recipient: z.string().describe("The address to receive the output tokens"),
  amount0Max: z.string().describe("The maximum amount of token0 to collect"),
  amount1Max: z.string().describe("The maximum amount of token1 to collect")
})) {
  static {
    __name(this, "CollectParams");
  }
};
var BurnParams = class extends createToolParameters(z.object({
  tokenId: z.string().describe("The token id of the liquidity position to be burned")
})) {
  static {
    __name(this, "BurnParams");
  }
};
var GlobalStateResponseParams = class extends createToolParameters(z.object({
  price: z.string().describe("The current price of the pool"),
  tick: z.number().describe("The current tick of the pool"),
  lastFee: z.number().describe("The current (last known) fee in hundredths of a bip"),
  pluginCongig: z.number().describe("The current plugin config as bitmap"),
  communityFee: z.number().describe("The community fee represented as a percent of all collected fee in thousandths"),
  unlocked: z.boolean().describe("Whether the pool is unlocked")
})) {
  static {
    __name(this, "GlobalStateResponseParams");
  }
};

export {
  GetSwapRouterAddressParams,
  pathSchema,
  ExactInputParams,
  ExactOutputParams,
  ExactInputSingleParams,
  ExactOutputSingleParams,
  DefaultConfigurationForPoolParams,
  PoolByPairParams,
  MintParams,
  IncreaseLiquidityParams,
  DecreaseLiquidityParams,
  CollectParams,
  BurnParams,
  GlobalStateResponseParams
};
//# sourceMappingURL=chunk-ZE2HDHEA.mjs.map