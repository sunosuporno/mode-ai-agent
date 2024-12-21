"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKP6PNBXNjs = require('./chunk-KP6PNBXN.js');











var _chunkBNDEZSYUjs = require('./chunk-BNDEZSYU.js');


var _chunk3SIMCS5Xjs = require('./chunk-3SIMCS5X.js');


var _chunkPULQHN7Kjs = require('./chunk-PULQHN7K.js');


var _chunkW6YHPBTFjs = require('./chunk-W6YHPBTF.js');


var _chunkENP2D6S3js = require('./chunk-ENP2D6S3.js');


var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/kim.service.ts
var _core = require('@goat-sdk/core');
var _walletevm = require('@goat-sdk/wallet-evm');
var _viem = require('viem');

function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
_chunk7QVYU63Ejs.__name.call(void 0, _ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
_chunk7QVYU63Ejs.__name.call(void 0, _ts_metadata, "_ts_metadata");
var SWAP_ROUTER_ADDRESS = "0xAc48FcF1049668B285f3dC72483DF5Ae2162f7e8";
var POSITION_MANAGER_ADDRESS = "0x2e8614625226D26180aDf6530C3b1677d3D7cf10";
var FACTORY_ADDRESS = "0xB5F00c2C5f8821155D8ed27E31932CFD9DB3C5D5";
var KimService = class {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "KimService");
  }
  async getSwapRouterAddress(parameters) {
    return SWAP_ROUTER_ADDRESS;
  }
  async swapExactInputSingleHop(walletClient, parameters) {
    try {
      const recipient = await walletClient.resolveAddress(parameters.recipient);
      const amountIn = parameters.amountIn;
      const amountOutMinimum = parameters.amountOutMinimum;
      const limitSqrtPrice = parameters.limitSqrtPrice;
      const timestamp = Math.floor(Date.now() / 1e3) + parameters.deadline;
      const hash = await walletClient.sendTransaction({
        to: SWAP_ROUTER_ADDRESS,
        abi: _chunkKP6PNBXNjs.SWAP_ROUTER_ABI,
        functionName: "exactInputSingle",
        args: [
          {
            tokenIn: parameters.tokenIn,
            tokenOut: parameters.tokenOut,
            recipient,
            deadline: timestamp,
            amountIn,
            amountOutMinimum,
            limitSqrtPrice
          }
        ]
      });
      return hash.hash;
    } catch (error) {
      throw Error(`Failed to swap: ${error}`);
    }
  }
  async swapExactOutputSingleHop(walletClient, parameters) {
    try {
      const tokenIn = await walletClient.resolveAddress(parameters.tokenIn);
      const tokenOut = await walletClient.resolveAddress(parameters.tokenOut);
      const recipient = await walletClient.resolveAddress(parameters.recipient);
      const tokenInDecimals = Number(await walletClient.read({
        address: parameters.tokenIn,
        abi: _chunk3SIMCS5Xjs.ERC20_ABI,
        functionName: "decimals"
      }));
      const tokenOutDecimals = Number(await walletClient.read({
        address: parameters.tokenOut,
        abi: _chunk3SIMCS5Xjs.ERC20_ABI,
        functionName: "decimals"
      }));
      const amountOut = _viem.parseUnits.call(void 0, parameters.amountOut, tokenOutDecimals);
      const amountInMaximum = _viem.parseUnits.call(void 0, parameters.amountInMaximum, tokenInDecimals);
      const limitSqrtPrice = _viem.parseUnits.call(void 0, parameters.limitSqrtPrice, 96);
      const hash = await walletClient.sendTransaction({
        to: SWAP_ROUTER_ADDRESS,
        abi: _chunkKP6PNBXNjs.SWAP_ROUTER_ABI,
        functionName: "exactOutputSingle",
        args: [
          tokenIn,
          tokenOut,
          recipient,
          parameters.deadline,
          amountOut,
          amountInMaximum,
          limitSqrtPrice
        ]
      });
      return hash.hash;
    } catch (error) {
      throw Error(`Failed to swap: ${error}`);
    }
  }
  async swapExactInputMultiHop(walletClient, parameters) {
    try {
      const recipient = await walletClient.resolveAddress(parameters.recipient);
      const tokenInDecimals = Number(await walletClient.read({
        address: parameters.path.tokenIn,
        abi: _chunk3SIMCS5Xjs.ERC20_ABI,
        functionName: "decimals"
      }));
      const tokenOutDecimals = Number(await walletClient.read({
        address: parameters.path.tokenOut,
        abi: _chunk3SIMCS5Xjs.ERC20_ABI,
        functionName: "decimals"
      }));
      const encodedPath = _viem.encodeAbiParameters.call(void 0, [
        {
          type: "address[]"
        },
        {
          type: "uint24[]"
        }
      ], [
        [
          parameters.path.tokenIn,
          ...parameters.path.intermediateTokens.map((t) => t),
          parameters.path.tokenOut
        ],
        parameters.path.fees
      ]);
      const hash = await walletClient.sendTransaction({
        to: SWAP_ROUTER_ADDRESS,
        abi: _chunkKP6PNBXNjs.SWAP_ROUTER_ABI,
        functionName: "exactInput",
        args: [
          encodedPath,
          recipient,
          parameters.deadline,
          _viem.parseUnits.call(void 0, parameters.amountIn, tokenInDecimals),
          _viem.parseUnits.call(void 0, parameters.amountOutMinimum, tokenOutDecimals)
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to swap: ${error}`);
    }
  }
  async swapExactOutputMultiHop(walletClient, parameters) {
    try {
      const recipient = await walletClient.resolveAddress(parameters.recipient);
      const tokenInDecimals = Number(await walletClient.read({
        address: parameters.path.tokenIn,
        abi: _chunk3SIMCS5Xjs.ERC20_ABI,
        functionName: "decimals"
      }));
      const tokenOutDecimals = Number(await walletClient.read({
        address: parameters.path.tokenOut,
        abi: _chunk3SIMCS5Xjs.ERC20_ABI,
        functionName: "decimals"
      }));
      const encodedPath = _viem.encodeAbiParameters.call(void 0, [
        {
          type: "address[]"
        },
        {
          type: "uint24[]"
        }
      ], [
        [
          parameters.path.tokenIn,
          ...parameters.path.intermediateTokens.map((t) => t),
          parameters.path.tokenOut
        ],
        parameters.path.fees
      ]);
      const hash = await walletClient.sendTransaction({
        to: SWAP_ROUTER_ADDRESS,
        abi: _chunkKP6PNBXNjs.SWAP_ROUTER_ABI,
        functionName: "exactOutput",
        args: [
          encodedPath,
          recipient,
          parameters.deadline,
          _viem.parseUnits.call(void 0, parameters.amountOut, tokenOutDecimals),
          _viem.parseUnits.call(void 0, parameters.amountInMaximum, tokenInDecimals)
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to swap: ${error}`);
    }
  }
  async mintPosition(walletClient, parameters) {
    try {
      const tickSpacing = 60;
      const recipient = await walletClient.resolveAddress(parameters.recipient);
      const token0 = await walletClient.resolveAddress(parameters.token0);
      const token1 = await walletClient.resolveAddress(parameters.token1);
      const poolAddress = await walletClient.read({
        address: FACTORY_ADDRESS,
        abi: _chunkPULQHN7Kjs.KIM_FACTORY_ABI,
        functionName: "getPool",
        args: [
          token0,
          token1
        ]
      });
      const { value } = await walletClient.read({
        address: poolAddress,
        abi: _chunkW6YHPBTFjs.POOL_ABI,
        functionName: "globalState"
      });
      const globalState = value;
      const currentTick = globalState.tick;
      const tickLower = parameters.tickLower ? parameters.tickLower : Math.floor(currentTick / tickSpacing) * tickSpacing - tickSpacing * 2;
      const tickUpper = parameters.tickUpper ? parameters.tickUpper : Math.floor(currentTick / tickSpacing) * tickSpacing + tickSpacing * 2;
      const [token0Decimals, token1Decimals] = await Promise.all([
        walletClient.read({
          address: parameters.token0,
          abi: _chunk3SIMCS5Xjs.ERC20_ABI,
          functionName: "decimals"
        }),
        walletClient.read({
          address: parameters.token1,
          abi: _chunk3SIMCS5Xjs.ERC20_ABI,
          functionName: "decimals"
        })
      ]);
      const amount0Desired = _viem.parseUnits.call(void 0, parameters.amount0Desired, Number(token0Decimals));
      const amount1Desired = _viem.parseUnits.call(void 0, parameters.amount1Desired, Number(token1Decimals));
      const hash = await walletClient.sendTransaction({
        to: POSITION_MANAGER_ADDRESS,
        abi: _chunkENP2D6S3js.POSITION_MANAGER_ABI,
        functionName: "mint",
        args: [
          {
            token0,
            token1,
            tickLower,
            tickUpper,
            amount0Desired,
            amount1Desired,
            amount0Min: 0,
            amount1Min: 0,
            recipient,
            deadline: parameters.deadline
          }
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to mint position: ${error}`);
    }
  }
  async increaseLiquidity(walletClient, parameters) {
    try {
      const [token0Decimals, token1Decimals] = await Promise.all([
        Number(await walletClient.read({
          address: parameters.token0,
          abi: _chunk3SIMCS5Xjs.ERC20_ABI,
          functionName: "decimals"
        })),
        Number(await walletClient.read({
          address: parameters.token1,
          abi: _chunk3SIMCS5Xjs.ERC20_ABI,
          functionName: "decimals"
        }))
      ]);
      const hash = await walletClient.sendTransaction({
        to: POSITION_MANAGER_ADDRESS,
        abi: _chunkENP2D6S3js.POSITION_MANAGER_ABI,
        functionName: "increaseLiquidity",
        args: [
          {
            tokenId: parameters.tokenId,
            amount0Desired: _viem.parseUnits.call(void 0, parameters.amount0Desired, token0Decimals),
            amount1Desired: _viem.parseUnits.call(void 0, parameters.amount1Desired, token1Decimals),
            amount0Min: _viem.parseUnits.call(void 0, parameters.amount0Min, token0Decimals),
            amount1Min: _viem.parseUnits.call(void 0, parameters.amount1Min, token1Decimals),
            deadline: parameters.deadline
          }
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to increase liquidity: ${error}`);
    }
  }
  async decreaseLiquidity(walletClient, parameters) {
    try {
      const [token0Decimals, token1Decimals] = await Promise.all([
        Number(await walletClient.read({
          address: parameters.token0,
          abi: _chunk3SIMCS5Xjs.ERC20_ABI,
          functionName: "decimals"
        })),
        Number(await walletClient.read({
          address: parameters.token1,
          abi: _chunk3SIMCS5Xjs.ERC20_ABI,
          functionName: "decimals"
        }))
      ]);
      const hash = await walletClient.sendTransaction({
        to: POSITION_MANAGER_ADDRESS,
        abi: _chunkENP2D6S3js.POSITION_MANAGER_ABI,
        functionName: "decreaseLiquidity",
        args: [
          {
            tokenId: parameters.tokenId,
            liquidity: _viem.parseUnits.call(void 0, parameters.liquidity, 18),
            amount0Min: _viem.parseUnits.call(void 0, parameters.amount0Min, token0Decimals),
            amount1Min: _viem.parseUnits.call(void 0, parameters.amount1Min, token1Decimals),
            deadline: parameters.deadline
          }
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to decrease liquidity: ${error}`);
    }
  }
  async collect(walletClient, parameters) {
    try {
      const recipient = await walletClient.resolveAddress(parameters.recipient);
      const [token0Decimals, token1Decimals] = await Promise.all([
        Number(await walletClient.read({
          address: parameters.token0,
          abi: _chunk3SIMCS5Xjs.ERC20_ABI,
          functionName: "decimals"
        })),
        Number(await walletClient.read({
          address: parameters.token1,
          abi: _chunk3SIMCS5Xjs.ERC20_ABI,
          functionName: "decimals"
        }))
      ]);
      const hash = await walletClient.sendTransaction({
        to: POSITION_MANAGER_ADDRESS,
        abi: _chunkENP2D6S3js.POSITION_MANAGER_ABI,
        functionName: "collect",
        args: [
          {
            tokenId: parameters.tokenId,
            recipient,
            amount0Max: _viem.parseUnits.call(void 0, parameters.amount0Max, token0Decimals),
            amount1Max: _viem.parseUnits.call(void 0, parameters.amount1Max, token1Decimals)
          }
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to collect: ${error}`);
    }
  }
  async burn(walletClient, parameters) {
    try {
      const hash = await walletClient.sendTransaction({
        to: POSITION_MANAGER_ADDRESS,
        abi: _chunkENP2D6S3js.POSITION_MANAGER_ABI,
        functionName: "burn",
        args: [
          parameters.tokenId
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to burn position: ${error}`);
    }
  }
};
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_get_swap_router_address",
    description: "Get the address of the swap router"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _chunkBNDEZSYUjs.GetSwapRouterAddressParams === "undefined" ? Object : _chunkBNDEZSYUjs.GetSwapRouterAddressParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "getSwapRouterAddress", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Swap an exact amount of input tokens for a single hop. Make sure tokens are approved for the swap router."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.ExactInputSingleParams === "undefined" ? Object : _chunkBNDEZSYUjs.ExactInputSingleParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "swapExactInputSingleHop", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_swap_exact_output_single_hop",
    description: "Swap an exact amount of output tokens for a single hop"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.ExactOutputSingleParams === "undefined" ? Object : _chunkBNDEZSYUjs.ExactOutputSingleParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "swapExactOutputSingleHop", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_swap_exact_input_multi_hop",
    description: "Swap an exact amount of input tokens in multiple hops"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.ExactInputParams === "undefined" ? Object : _chunkBNDEZSYUjs.ExactInputParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "swapExactInputMultiHop", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_swap_exact_output_multi_hop",
    description: "Swap tokens to receive an exact amount of output tokens in multiple hops"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.ExactOutputParams === "undefined" ? Object : _chunkBNDEZSYUjs.ExactOutputParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "swapExactOutputMultiHop", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_mint_position",
    description: "Mint a new liquidity position"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.MintParams === "undefined" ? Object : _chunkBNDEZSYUjs.MintParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "mintPosition", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_increase_liquidity",
    description: "Increase liquidity in an existing position"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.IncreaseLiquidityParams === "undefined" ? Object : _chunkBNDEZSYUjs.IncreaseLiquidityParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "increaseLiquidity", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_decrease_liquidity",
    description: "Decrease liquidity in an existing position"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.DecreaseLiquidityParams === "undefined" ? Object : _chunkBNDEZSYUjs.DecreaseLiquidityParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "decreaseLiquidity", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_collect",
    description: "Collect tokens from a liquidity position"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.CollectParams === "undefined" ? Object : _chunkBNDEZSYUjs.CollectParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "collect", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    name: "kim_burn",
    description: "Burn a liquidity position NFT after all tokens have been collected"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkBNDEZSYUjs.BurnParams === "undefined" ? Object : _chunkBNDEZSYUjs.BurnParams
  ]),
  _ts_metadata("design:returntype", Promise)
], KimService.prototype, "burn", null);



exports.KimService = KimService;
//# sourceMappingURL=chunk-2OPV7TD3.js.map