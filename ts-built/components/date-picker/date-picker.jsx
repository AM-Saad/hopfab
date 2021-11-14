"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_1 = require("lodash");
function useListener(ref, eventName, handler) {
    react_1.useEffect(function () {
        if (ref.current) {
            var element_1 = ref.current;
            element_1.addEventListener(eventName, handler);
            return function () { return element_1.removeEventListener(eventName, handler); };
        }
    }, [eventName, handler, ref]);
}
var DATE_FORMAT = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
var DatePicker = function (_a) {
    var name = _a.name, _b = _a.min, min = _b === void 0 ? "" : _b, _c = _a.max, max = _c === void 0 ? "" : _c, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, _d = _a.dateAdapter, dateAdapter = _d === void 0 ? {
        parse: function (value, createDate) {
            if (value === void 0) { value = ""; }
            var matches = value.match(DATE_FORMAT);
            if (matches) {
                return createDate(matches[3], matches[2], matches[1]);
            }
        },
        format: function (date) {
            return lodash_1.padStart(date.getDate().toString(), 2, "0") + "/" + lodash_1.padStart((date.getMonth() + 1).toString(), 2, "0") + "/" + date.getFullYear();
        },
    } : _d, _e = _a.localization, localization = _e === void 0 ? {
        buttonLabel: "Choisir une date",
        placeholder: "DD/MM/YYYY",
        selectedDateMessage: "La date sélectionnée est",
        prevMonthLabel: "Mois précédent",
        nextMonthLabel: "Mois suivant",
        monthSelectLabel: "Mois",
        yearSelectLabel: "Année",
        closeLabel: "Fermer",
        keyboardInstruction: "Vous pouvez utiliser les flèches du clavier pour naviguer entre les dates",
        calendarHeading: "Choisir une date",
        dayNames: [
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
        ],
        monthNames: [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
        ],
        monthNamesShort: [
            "Janv",
            "Févr",
            "Mars",
            "Avr",
            "Mai",
            "Juin",
            "Juill",
            "Août",
            "Sept",
            "Oct",
            "Nov",
            "Déc",
        ],
    } : _e, props = __rest(_a, ["name", "min", "max", "onChange", "onFocus", "onBlur", "dateAdapter", "localization"]);
    var ref = react_1.useRef(null);
    useListener(ref, "duetChange", onChange);
    useListener(ref, "duetFocus", onFocus);
    useListener(ref, "duetBlur", onBlur);
    react_1.useEffect(function () {
        ref.current.localization = localization;
        ref.current.dateAdapter = dateAdapter;
    }, [localization, dateAdapter]);
    return (<duet-date-picker ref={ref} identifier={name} name={name} min={min} max={max} {...props}/>);
};
exports.default = DatePicker;
//# sourceMappingURL=date-picker.jsx.map