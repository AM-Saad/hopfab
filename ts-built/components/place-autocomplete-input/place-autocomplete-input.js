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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
let autoComplete;
let initialized = !!(window === null || window === void 0 ? void 0 : window.google);
const loadScript = (url, callback) => {
    if (initialized)
        return;
    initialized = true;
    let script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.onload = () => callback();
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};
function handleScriptLoad(updateQuery, autoCompleteRef, onPlaceSelected) {
    const circleFromCenterOfFrance = new google.maps.Circle({
        center: { lat: 46.5819081, lng: -2.0206618 },
        radius: 3000,
    });
    autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, { bounds: circleFromCenterOfFrance.getBounds() });
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () => handlePlaceSelect(updateQuery, onPlaceSelected));
}
function handlePlaceSelect(updateQuery, onPlaceSelected) {
    return __awaiter(this, void 0, void 0, function* () {
        const addressObject = autoComplete.getPlace();
        const query = addressObject.formatted_address;
        updateQuery(query);
        onPlaceSelected(addressObject);
    });
}
const PlaceAutocompleteInput = ({ id, name, defaultValue, className, placeholder, onPlaceSelected, onChange, onBlur, }) => {
    const [query, setQuery] = react_1.useState(defaultValue);
    const autoCompleteRef = react_1.useRef(null);
    react_1.useEffect(() => {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAPS_API_KEY}&libraries=places`, () => handleScriptLoad(setQuery, autoCompleteRef, onPlaceSelected));
    }, []);
    return (<input id={id} name={name} className={className} type="text" placeholder={placeholder} ref={autoCompleteRef} onChange={event => {
            setQuery(event.target.value);
            onChange(event);
        }} onBlur={onBlur} value={query}/>);
};
exports.default = PlaceAutocompleteInput;
