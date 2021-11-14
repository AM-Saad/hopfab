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
const react_1 = require("react");
const lodash_1 = require("lodash");
function useListener(ref, eventName, handler) {
    react_1.useEffect(() => {
        if (ref.current) {
            const element = ref.current;
            element.addEventListener(eventName, handler);
            return () => element.removeEventListener(eventName, handler);
        }
    }, [eventName, handler, ref]);
}
const DATE_FORMAT = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
const DatePicker = (_a) => {
    var { name, min = "", max = "", onChange, onFocus, onBlur, dateAdapter = {
        parse(value = "", createDate) {
            const matches = value.match(DATE_FORMAT);
            if (matches) {
                return createDate(matches[3], matches[2], matches[1]);
            }
        },
        format(date) {
            return `${lodash_1.padStart(date.getDate().toString(), 2, "0")}/${lodash_1.padStart((date.getMonth() + 1).toString(), 2, "0")}/${date.getFullYear()}`;
        },
    }, localization = {
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
    } } = _a, props = __rest(_a, ["name", "min", "max", "onChange", "onFocus", "onBlur", "dateAdapter", "localization"]);
    const ref = react_1.useRef(null);
    useListener(ref, "duetChange", onChange);
    useListener(ref, "duetFocus", onFocus);
    useListener(ref, "duetBlur", onBlur);
    react_1.useEffect(() => {
        ref.current.localization = localization;
        ref.current.dateAdapter = dateAdapter;
    }, [localization, dateAdapter]);
    return (<duet-date-picker ref={ref} identifier={name} name={name} min={min} max={max} {...props}/>);
};
exports.default = DatePicker;
