var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import DeleteButton from "./DeleteButton";
export default (function (_a) {
    var value = _a.value, onChange = _a.onChange, onDelete = _a.onDelete, _b = _a.placeholder, placeholder = _b === void 0 ? "INPUT TAG HERE" : _b;
    return (React.createElement("div", { className: "rp-default-input-section" },
        React.createElement("input", { className: "rp-default-input-section_input", placeholder: placeholder, value: value.type, onChange: function (e) { return onChange(__assign(__assign({}, value), { type: e.target.value })); } }),
        React.createElement("a", { className: "rp-default-input-section_delete", onClick: function () { return onDelete(); } },
            React.createElement(DeleteButton, null))));
});
//# sourceMappingURL=DefaultInputSection.js.map