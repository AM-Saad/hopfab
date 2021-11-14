import React, { useState, useEffect, useRef } from "react";

let autoComplete;

let initialized = !!window?.google;

const loadScript = (url, callback) => {
  if (initialized) return;

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

  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { bounds: circleFromCenterOfFrance.getBounds() }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, onPlaceSelected)
  );
}

async function handlePlaceSelect(updateQuery, onPlaceSelected) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  onPlaceSelected(addressObject);
}

const PlaceAutocompleteInput = ({
  id,
  name,
  defaultValue,
  className,
  placeholder,
  onPlaceSelected,
  onChange,
  onBlur,
}) => {
  const [query, setQuery] = useState(defaultValue);

  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAPS_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef, onPlaceSelected)
    );
  }, []);

  return (
    <input
      id={id}
      name={name}
      className={className}
      type="text"
      placeholder={placeholder}
      ref={autoCompleteRef}
      onChange={event => {
        setQuery(event.target.value);
        onChange(event);
      }}
      onBlur={onBlur}
      value={query}
    />
  );
};

export default PlaceAutocompleteInput;
