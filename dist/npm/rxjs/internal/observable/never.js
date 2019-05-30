"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable.js");
var noop_1 = require("../util/noop.js");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
  return exports.NEVER;
}
exports.never = never;
//# sourceMappingURL=never.js.map