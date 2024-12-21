"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/parameters.ts
var _core = require('@goat-sdk/core');
var _zod = require('zod');
var GetSwapRouterAddressParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetSwapRouterAddressParams");
  }
};
var pathSchema = _zod.z.object({
  tokenIn: _zod.z.string().describe("Address of the first token in the path"),
  tokenOut: _zod.z.string().describe("Address of the last token in the path"),
  intermediateTokens: _zod.z.array(_zod.z.string()).describe("Addresses of the intermediate tokens in the path"),
  fees: _zod.z.array(_zod.z.number()).describe("Fee tiers between each hop")
});
var ExactInputParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  path: pathSchema.describe("The path of the swap"),
  recipient: _zod.z.string().describe("Address to receive the output tokens"),
  deadline: _zod.z.number().describe("The deadline for the swap"),
  amountIn: _zod.z.string().describe("The amount of tokens to swap in"),
  amountOutMinimum: _zod.z.string().describe("The minimum amount of tokens to receive")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "ExactInputParams");
  }
};
var ExactOutputParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  path: _zod.z.any().describe("The path of the swap"),
  recipient: _zod.z.string().describe("The address to receive the output tokens"),
  deadline: _zod.z.number().describe("The deadline for the swap"),
  amountOut: _zod.z.string().describe("The amount of tokens to swap out"),
  amountInMaximum: _zod.z.string().describe("The maximum amount of tokens to swap in")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "ExactOutputParams");
  }
};
var ExactInputSingleParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenIn: _zod.z.string().describe("The address of the token to swap in"),
  tokenOut: _zod.z.string().describe("The address of the token to swap out"),
  recipient: _zod.z.string().describe("The address to receive the output tokens"),
  deadline: _zod.z.number().optional().default(60 * 60 * 24).describe("The deadline for the swap in seconds from now"),
  amountIn: _zod.z.string().describe("The amount of tokens to swap in in base units"),
  amountOutMinimum: _zod.z.string().describe("The minimum amount of tokens to receive in base units"),
  limitSqrtPrice: _zod.z.string().describe("The limit price for the swap")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "ExactInputSingleParams");
  }
};
var ExactOutputSingleParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenIn: _zod.z.string().describe("The token to swap in"),
  tokenOut: _zod.z.string().describe("The token to swap out"),
  recipient: _zod.z.string().describe("The address to receive the output tokens"),
  deadline: _zod.z.number().describe("The deadline for the swap"),
  amountOut: _zod.z.string().describe("The amount of tokens to swap out"),
  amountInMaximum: _zod.z.string().describe("The maximum amount of tokens to swap in"),
  limitSqrtPrice: _zod.z.string().describe("The limit price for the swap")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "ExactOutputSingleParams");
  }
};
var DefaultConfigurationForPoolParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  poolAddress: _zod.z.string().describe("The address of the pool")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "DefaultConfigurationForPoolParams");
  }
};
var PoolByPairParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  token0: _zod.z.string().describe("The first token in the pair"),
  token1: _zod.z.string().describe("The second token in the pair")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "PoolByPairParams");
  }
};
var MintParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  token0: _zod.z.string().describe("The first token in the pair"),
  token1: _zod.z.string().describe("The second token in the pair"),
  tickLower: _zod.z.number().describe("The lower tick for the liquidity"),
  tickUpper: _zod.z.number().describe("The upper tick for the liquidity"),
  amount0Desired: _zod.z.string().describe("The amount of token0 to add"),
  amount1Desired: _zod.z.string().describe("The amount of token1 to add"),
  amount0Min: _zod.z.string().describe("The minimum amount of token0 to add"),
  amount1Min: _zod.z.string().describe("The minimum amount of token1 to add"),
  recipient: _zod.z.string().describe("The address to receive the output tokens"),
  deadline: _zod.z.number().describe("The deadline for the swap")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "MintParams");
  }
};
var IncreaseLiquidityParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  token0: _zod.z.string().describe("The first token in the pair"),
  token1: _zod.z.string().describe("The second token in the pair"),
  tokenId: _zod.z.string().describe("The token id of the liquidity"),
  amount0Desired: _zod.z.string().describe("The amount of token0 to add"),
  amount1Desired: _zod.z.string().describe("The amount of token1 to add"),
  amount0Min: _zod.z.string().describe("The minimum amount of token0 to add"),
  amount1Min: _zod.z.string().describe("The minimum amount of token1 to add"),
  deadline: _zod.z.number().describe("The deadline for the swap")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "IncreaseLiquidityParams");
  }
};
var DecreaseLiquidityParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  token0: _zod.z.string().describe("The first token in the pair"),
  token1: _zod.z.string().describe("The second token in the pair"),
  tokenId: _zod.z.string().describe("The token id of the liquidity"),
  liquidity: _zod.z.string().describe("The amount of liquidity to remove"),
  amount0Min: _zod.z.string().describe("The minimum amount of token0 to remove"),
  amount1Min: _zod.z.string().describe("The minimum amount of token1 to remove"),
  deadline: _zod.z.number().describe("The deadline for the swap")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "DecreaseLiquidityParams");
  }
};
var CollectParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenId: _zod.z.string().describe("The token id of the liquidity"),
  token0: _zod.z.string().describe("The first token in the pair"),
  token1: _zod.z.string().describe("The second token in the pair"),
  recipient: _zod.z.string().describe("The address to receive the output tokens"),
  amount0Max: _zod.z.string().describe("The maximum amount of token0 to collect"),
  amount1Max: _zod.z.string().describe("The maximum amount of token1 to collect")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "CollectParams");
  }
};
var BurnParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenId: _zod.z.string().describe("The token id of the liquidity position to be burned")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "BurnParams");
  }
};
var GlobalStateResponseParams = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  price: _zod.z.string().describe("The current price of the pool"),
  tick: _zod.z.number().describe("The current tick of the pool"),
  lastFee: _zod.z.number().describe("The current (last known) fee in hundredths of a bip"),
  pluginCongig: _zod.z.number().describe("The current plugin config as bitmap"),
  communityFee: _zod.z.number().describe("The community fee represented as a percent of all collected fee in thousandths"),
  unlocked: _zod.z.boolean().describe("Whether the pool is unlocked")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GlobalStateResponseParams");
  }
};
















exports.GetSwapRouterAddressParams = GetSwapRouterAddressParams; exports.pathSchema = pathSchema; exports.ExactInputParams = ExactInputParams; exports.ExactOutputParams = ExactOutputParams; exports.ExactInputSingleParams = ExactInputSingleParams; exports.ExactOutputSingleParams = ExactOutputSingleParams; exports.DefaultConfigurationForPoolParams = DefaultConfigurationForPoolParams; exports.PoolByPairParams = PoolByPairParams; exports.MintParams = MintParams; exports.IncreaseLiquidityParams = IncreaseLiquidityParams; exports.DecreaseLiquidityParams = DecreaseLiquidityParams; exports.CollectParams = CollectParams; exports.BurnParams = BurnParams; exports.GlobalStateResponseParams = GlobalStateResponseParams;
//# sourceMappingURL=chunk-BNDEZSYU.js.map