"use strict";Object.defineProperty(exports, "__esModule", {value: true}); var _class;

var _chunk2OPV7TD3js = require('./chunk-2OPV7TD3.js');


var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/kim.plugin.ts
var _core = require('@goat-sdk/core');
var _chains = require('viem/chains');
var SUPPORTED_CHAINS = [
  _chains.mode
];
var KimPlugin = (_class = class extends _core.PluginBase {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "KimPlugin");
  }
  constructor() {
    super("kim", [
      new (0, _chunk2OPV7TD3js.KimService)()
    ]);_class.prototype.__init.call(this);;
  }
  __init() {this.supportsChain = /* @__PURE__ */ _chunk7QVYU63Ejs.__name.call(void 0, (chain) => chain.type === "evm" && SUPPORTED_CHAINS.some((c) => c.id === chain.id), "supportsChain")}
}, _class);
var kim = /* @__PURE__ */ _chunk7QVYU63Ejs.__name.call(void 0, () => new KimPlugin(), "kim");




exports.KimPlugin = KimPlugin; exports.kim = kim;
//# sourceMappingURL=chunk-2O2GBYUJ.js.map