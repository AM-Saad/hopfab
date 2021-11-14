"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetExceptContact = exports.updateAttachments = exports.updateData = exports.updateForm = exports.updateMeta = exports.INITIAL_META = void 0;
var lodash_1 = require("lodash");
var quotationform_1 = require("../../models/quotationform");
exports.INITIAL_META = {
    currentStep: 1,
    totalSteps: 12,
    isFinished: false,
};
var updateMeta = function (state, payload) { return (__assign(__assign({}, state), { meta: __assign(__assign({}, state.meta), payload) })); };
exports.updateMeta = updateMeta;
var updateForm = function (state, payload) {
    return (__assign(__assign({}, state), { form: __assign(__assign({}, state.form), payload) }));
};
exports.updateForm = updateForm;
var updateData = function (state, payload) { return (__assign(__assign({}, state), { data: __assign(__assign({}, state.data), payload) })); };
exports.updateData = updateData;
var updateAttachments = function (state, payload) { return (__assign(__assign({}, state), { form: __assign(__assign({}, state.form), {
        attachments: __spreadArray([], payload),
    }) })); };
exports.updateAttachments = updateAttachments;
var resetExceptContact = function (state) { return (__assign(__assign({}, state), { meta: lodash_1.cloneDeep(exports.INITIAL_META), form: __assign(__assign({}, lodash_1.cloneDeep(quotationform_1.INITIAL_QUOTATION_FORM)), {
        contact: __assign({}, state.form.contact),
    }) })); };
exports.resetExceptContact = resetExceptContact;
//# sourceMappingURL=stateMachineActions.js.map