"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_TYPE_LABELS = exports.ClientType = void 0;
var ClientType;
(function (ClientType) {
    ClientType[ClientType["Client"] = 0] = "Client";
    ClientType[ClientType["Advisor"] = 1] = "Advisor";
})(ClientType = exports.ClientType || (exports.ClientType = {}));
// On a pas vraiment besoin d'un Map<ClientType, string> ici, vu qu'on s'en sert qu'à un endroit
exports.CLIENT_TYPE_LABELS = [
    { label: "Client final", code: ClientType.Client },
    { label: "Prescripteur", code: ClientType.Advisor },
];
//# sourceMappingURL=clienttype.js.map