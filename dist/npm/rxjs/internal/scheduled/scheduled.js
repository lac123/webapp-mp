"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scheduleObservable_1 = require("./scheduleObservable.js");
var schedulePromise_1 = require("./schedulePromise.js");
var scheduleArray_1 = require("./scheduleArray.js");
var scheduleIterable_1 = require("./scheduleIterable.js");
var isInteropObservable_1 = require("../util/isInteropObservable.js");
var isPromise_1 = require("../util/isPromise.js");
var isArrayLike_1 = require("../util/isArrayLike.js");
var isIterable_1 = require("../util/isIterable.js");
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable_1.isInteropObservable(input)) {
      return scheduleObservable_1.scheduleObservable(input, scheduler);
    } else if (isPromise_1.isPromise(input)) {
      return schedulePromise_1.schedulePromise(input, scheduler);
    } else if (isArrayLike_1.isArrayLike(input)) {
      return scheduleArray_1.scheduleArray(input, scheduler);
    } else if (isIterable_1.isIterable(input) || typeof input === 'string') {
      return scheduleIterable_1.scheduleIterable(input, scheduler);
    }
  }
  throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
exports.scheduled = scheduled;
//# sourceMappingURL=scheduled.js.map