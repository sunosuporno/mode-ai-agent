import {
  KimService
} from "./chunk-FLV7PHIX.mjs";
import {
  __name
} from "./chunk-PAWJFY3S.mjs";

// src/kim.plugin.ts
import { PluginBase } from "@goat-sdk/core";
import { mode } from "viem/chains";
var SUPPORTED_CHAINS = [
  mode
];
var KimPlugin = class extends PluginBase {
  static {
    __name(this, "KimPlugin");
  }
  constructor() {
    super("kim", [
      new KimService()
    ]);
  }
  supportsChain = /* @__PURE__ */ __name((chain) => chain.type === "evm" && SUPPORTED_CHAINS.some((c) => c.id === chain.id), "supportsChain");
};
var kim = /* @__PURE__ */ __name(() => new KimPlugin(), "kim");

export {
  KimPlugin,
  kim
};
//# sourceMappingURL=chunk-NUO2TMHR.mjs.map