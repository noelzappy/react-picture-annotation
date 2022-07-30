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
import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
export default (function (_a) {
    var value = _a.value, onChange = _a.onChange, onDelete = _a.onDelete, _b = _a.placeholder, placeholder = _b === void 0 ? "INPUT TAG HERE" : _b;
    var _c = useState(value.type), text = _c[0], setText = _c[1];
    return (React.createElement("div", { className: "rp-default-input-section" },
        React.createElement("input", { className: "rp-default-input-section_input", placeholder: placeholder, value: text, onChange: function (e) { return setText(e.target.value); } }),
        React.createElement("a", { className: "rp-default-input-section_delete", onClick: function () { return onDelete(); } },
            React.createElement(DeleteButton, null)),
        React.createElement("a", { className: "rp-default-input-section_delete", onClick: function () {
                onChange(__assign(__assign({}, value), { type: text }));
            } }, "Save Annotation")));
});
//# sourceMappingURL=DefaultInputSection.js.map