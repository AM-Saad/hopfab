"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var autoComplete;
var initialized = !!(window === null || window === void 0 ? void 0 : window.google);
var loadScript = function (url, callback) {
    if (initialized)
        return;
    initialized = true;
    var script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.onload = function () { return callback(); };
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};
function handleScriptLoad(updateQuery, autoCompleteRef, onPlaceSelected) {
    var circleFromCenterOfFrance = new google.maps.Circle({
        center: { lat: 46.5819081, lng: -2.0206618 },
        radius: 3000,
    });
    autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, { bounds: circleFromCenterOfFrance.getBounds() });
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", function () {
        return handlePlaceSelect(updateQuery, onPlaceSelected);
    });
}
function handlePlaceSelect(updateQuery, onPlaceSelected) {
    return __awaiter(this, void 0, void 0, function () {
        var addressObject, query;
        return __generator(this, function (_a) {
            addressObject = autoComplete.getPlace();
            query = addressObject.formatted_address;
            updateQuery(query);
            onPlaceSelected(addressObject);
            return [2 /*return*/];
        });
    });
}
var PlaceAutocompleteInput = function (_a) {
    var id = _a.id, name = _a.name, defaultValue = _a.defaultValue, className = _a.className, placeholder = _a.placeholder, onPlaceSelected = _a.onPlaceSelected, onChange = _a.onChange, onBlur = _a.onBlur;
    var _b = react_1.useState(defaultValue), query = _b[0], setQuery = _b[1];
    var autoCompleteRef = react_1.useRef(null);
    react_1.useEffect(function () {
        loadScript("https://maps.googleapis.com/maps/api/js?key=" + process.env.GATSBY_MAPS_API_KEY + "&libraries=places", function () { return handleScriptLoad(setQuery, autoCompleteRef, onPlaceSelected); });
    }, []);
    return (<input id={id} name={name} className={className} type="text" placeholder={placeholder} ref={autoCompleteRef} onChange={function (event) {
            setQuery(event.target.value);
            onChange(event);
        }} onBlur={onBlur} value={query}/>);
};
exports.default = PlaceAutocompleteInput;
//# sourceMappingURL=place-autocomplete-input.jsx.map