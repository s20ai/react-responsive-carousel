"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(position, metric, axis) {
  // const positionPercent = position === 0 ? position : position + metric;
  //to handle center mode on landscape for android and iOS
  var positionPercent = position === 0 ? position : axis === 'horizontal' ? position + metric : position + 15 + metric;
  var positionCss = axis === 'horizontal' ? [positionPercent, 0, 0] : [0, positionPercent, 0];
  var transitionProp = 'translate3d';
  var translatedPosition = '(' + positionCss.join(',') + ')';
  return transitionProp + translatedPosition;
};

exports.default = _default;