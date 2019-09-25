"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _equipment = require("./equipment");

Object.keys(_equipment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _equipment[key];
    }
  });
});
