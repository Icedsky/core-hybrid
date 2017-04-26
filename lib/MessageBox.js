"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageBox = function () {
    function MessageBox(message) {
        _classCallCheck(this, MessageBox);

        this._message = message;
    }

    _createClass(MessageBox, [{
        key: "show",
        value: function show() {}
    }, {
        key: "message",
        get: function get() {
            return this._message;
        },
        set: function set(value) {
            this._message = value;
        }
    }]);

    return MessageBox;
}();

exports.default = MessageBox;
module.exports = exports["default"];