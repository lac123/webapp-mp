"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable.js");
var async_1 = require("../scheduler/async.js");
var isNumeric_1 = require("../util/isNumeric.js");
function interval(period, scheduler) {
  if (period === undefined) {
    period = 0;
  }
  if (scheduler === undefined) {
    scheduler = async_1.async;
  }
  if (!isNumeric_1.isNumeric(period) || period < 0) {
    period = 0;
  }
  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = async_1.async;
  }
  return new Observable_1.Observable(function (subscriber) {
    subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
    return subscriber;
  });
}
exports.interval = interval;
function dispatch(state) {
  var subscriber = state.subscriber,
      counter = state.counter,
      period = state.period;
  subscriber.next(counter);
  this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map