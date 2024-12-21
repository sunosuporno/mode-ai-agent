import * as _goat_sdk_core from '@goat-sdk/core';
import { z } from 'zod';

declare const GetSwapRouterAddressParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
declare class GetSwapRouterAddressParams extends GetSwapRouterAddressParams_base {
}
declare const pathSchema: z.ZodObject<{
    tokenIn: z.ZodString;
    tokenOut: z.ZodString;
    intermediateTokens: z.ZodArray<z.ZodString, "many">;
    fees: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    tokenIn: string;
    tokenOut: string;
    intermediateTokens: string[];
    fees: number[];
}, {
    tokenIn: string;
    tokenOut: string;
    intermediateTokens: string[];
    fees: number[];
}>;
declare const ExactInputParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    path: z.ZodObject<{
        tokenIn: z.ZodString;
        tokenOut: z.ZodString;
        intermediateTokens: z.ZodArray<z.ZodString, "many">;
        fees: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        tokenIn: string;
        tokenOut: string;
        intermediateTokens: string[];
        fees: number[];
    }, {
        tokenIn: string;
        tokenOut: string;
        intermediateTokens: string[];
        fees: number[];
    }>;
    recipient: z.ZodString;
    deadline: z.ZodNumber;
    amountIn: z.ZodString;
    amountOutMinimum: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: {
        tokenIn: string;
        tokenOut: string;
        intermediateTokens: string[];
        fees: number[];
    };
    recipient: string;
    deadline: number;
    amountIn: string;
    amountOutMinimum: string;
}, {
    path: {
        tokenIn: string;
        tokenOut: string;
        intermediateTokens: string[];
        fees: number[];
    };
    recipient: string;
    deadline: number;
    amountIn: string;
    amountOutMinimum: string;
}>>;
declare class ExactInputParams extends ExactInputParams_base {
}
declare const ExactOutputParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    path: z.ZodAny;
    recipient: z.ZodString;
    deadline: z.ZodNumber;
    amountOut: z.ZodString;
    amountInMaximum: z.ZodString;
}, "strip", z.ZodTypeAny, {
    recipient: string;
    deadline: number;
    amountOut: string;
    amountInMaximum: string;
    path?: any;
}, {
    recipient: string;
    deadline: number;
    amountOut: string;
    amountInMaximum: string;
    path?: any;
}>>;
declare class ExactOutputParams extends ExactOutputParams_base {
}
declare const ExactInputSingleParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenIn: z.ZodString;
    tokenOut: z.ZodString;
    recipient: z.ZodString;
    deadline: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    amountIn: z.ZodString;
    amountOutMinimum: z.ZodString;
    limitSqrtPrice: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tokenIn: string;
    tokenOut: string;
    recipient: string;
    deadline: number;
    amountIn: string;
    amountOutMinimum: string;
    limitSqrtPrice: string;
}, {
    tokenIn: string;
    tokenOut: string;
    recipient: string;
    amountIn: string;
    amountOutMinimum: string;
    limitSqrtPrice: string;
    deadline?: number | undefined;
}>>;
declare class ExactInputSingleParams extends ExactInputSingleParams_base {
}
declare const ExactOutputSingleParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenIn: z.ZodString;
    tokenOut: z.ZodString;
    recipient: z.ZodString;
    deadline: z.ZodNumber;
    amountOut: z.ZodString;
    amountInMaximum: z.ZodString;
    limitSqrtPrice: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tokenIn: string;
    tokenOut: string;
    recipient: string;
    deadline: number;
    amountOut: string;
    amountInMaximum: string;
    limitSqrtPrice: string;
}, {
    tokenIn: string;
    tokenOut: string;
    recipient: string;
    deadline: number;
    amountOut: string;
    amountInMaximum: string;
    limitSqrtPrice: string;
}>>;
declare class ExactOutputSingleParams extends ExactOutputSingleParams_base {
}
declare const DefaultConfigurationForPoolParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    poolAddress: z.ZodString;
}, "strip", z.ZodTypeAny, {
    poolAddress: string;
}, {
    poolAddress: string;
}>>;
declare class DefaultConfigurationForPoolParams extends DefaultConfigurationForPoolParams_base {
}
declare const PoolByPairParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    token0: z.ZodString;
    token1: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token0: string;
    token1: string;
}, {
    token0: string;
    token1: string;
}>>;
declare class PoolByPairParams extends PoolByPairParams_base {
}
declare const MintParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    token0: z.ZodString;
    token1: z.ZodString;
    tickLower: z.ZodNumber;
    tickUpper: z.ZodNumber;
    amount0Desired: z.ZodString;
    amount1Desired: z.ZodString;
    amount0Min: z.ZodString;
    amount1Min: z.ZodString;
    recipient: z.ZodString;
    deadline: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    recipient: string;
    deadline: number;
    token0: string;
    token1: string;
    tickLower: number;
    tickUpper: number;
    amount0Desired: string;
    amount1Desired: string;
    amount0Min: string;
    amount1Min: string;
}, {
    recipient: string;
    deadline: number;
    token0: string;
    token1: string;
    tickLower: number;
    tickUpper: number;
    amount0Desired: string;
    amount1Desired: string;
    amount0Min: string;
    amount1Min: string;
}>>;
declare class MintParams extends MintParams_base {
}
declare const IncreaseLiquidityParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    token0: z.ZodString;
    token1: z.ZodString;
    tokenId: z.ZodString;
    amount0Desired: z.ZodString;
    amount1Desired: z.ZodString;
    amount0Min: z.ZodString;
    amount1Min: z.ZodString;
    deadline: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    deadline: number;
    token0: string;
    token1: string;
    amount0Desired: string;
    amount1Desired: string;
    amount0Min: string;
    amount1Min: string;
    tokenId: string;
}, {
    deadline: number;
    token0: string;
    token1: string;
    amount0Desired: string;
    amount1Desired: string;
    amount0Min: string;
    amount1Min: string;
    tokenId: string;
}>>;
declare class IncreaseLiquidityParams extends IncreaseLiquidityParams_base {
}
declare const DecreaseLiquidityParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    token0: z.ZodString;
    token1: z.ZodString;
    tokenId: z.ZodString;
    liquidity: z.ZodString;
    amount0Min: z.ZodString;
    amount1Min: z.ZodString;
    deadline: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    deadline: number;
    token0: string;
    token1: string;
    amount0Min: string;
    amount1Min: string;
    tokenId: string;
    liquidity: string;
}, {
    deadline: number;
    token0: string;
    token1: string;
    amount0Min: string;
    amount1Min: string;
    tokenId: string;
    liquidity: string;
}>>;
declare class DecreaseLiquidityParams extends DecreaseLiquidityParams_base {
}
declare const CollectParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenId: z.ZodString;
    token0: z.ZodString;
    token1: z.ZodString;
    recipient: z.ZodString;
    amount0Max: z.ZodString;
    amount1Max: z.ZodString;
}, "strip", z.ZodTypeAny, {
    recipient: string;
    token0: string;
    token1: string;
    tokenId: string;
    amount0Max: string;
    amount1Max: string;
}, {
    recipient: string;
    token0: string;
    token1: string;
    tokenId: string;
    amount0Max: string;
    amount1Max: string;
}>>;
declare class CollectParams extends CollectParams_base {
}
declare const BurnParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tokenId: string;
}, {
    tokenId: string;
}>>;
declare class BurnParams extends BurnParams_base {
}
declare const GlobalStateResponseParams_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    price: z.ZodString;
    tick: z.ZodNumber;
    lastFee: z.ZodNumber;
    pluginCongig: z.ZodNumber;
    communityFee: z.ZodNumber;
    unlocked: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    price: string;
    tick: number;
    lastFee: number;
    pluginCongig: number;
    communityFee: number;
    unlocked: boolean;
}, {
    price: string;
    tick: number;
    lastFee: number;
    pluginCongig: number;
    communityFee: number;
    unlocked: boolean;
}>>;
declare class GlobalStateResponseParams extends GlobalStateResponseParams_base {
}

export { BurnParams, CollectParams, DecreaseLiquidityParams, DefaultConfigurationForPoolParams, ExactInputParams, ExactInputSingleParams, ExactOutputParams, ExactOutputSingleParams, GetSwapRouterAddressParams, GlobalStateResponseParams, IncreaseLiquidityParams, MintParams, PoolByPairParams, pathSchema };
