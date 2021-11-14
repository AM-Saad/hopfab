import React, { useEffect, useRef } from "react";
import { DuetDateAdapter } from "@duetds/date-picker/dist/types/components/duet-date-picker/date-adapter";
import { DuetLocalizedText } from "@duetds/date-picker/dist/types/components/duet-date-picker/date-localization";
import { padStart } from "lodash";

function useListener(ref, eventName, handler) {
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.addEventListener(eventName, handler);
      return () => element.removeEventListener(eventName, handler);
    }
  }, [eventName, handler, ref]);
}

const DATE_FORMAT = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

type DataProps = {
  name: string;
  value?: any;
  min?: string;
  max?: string;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  dateAdapter?: DuetDateAdapter;
  localization?: DuetLocalizedText;
};

const DatePicker: React.FC<DataProps> = ({
  name,
  min = "",
  max = "",
  onChange,
  onFocus,
  onBlur,
  dateAdapter = {
    parse(value = "", createDate) {
      const matches = value.match(DATE_FORMAT);

      if (matches) {
        return createDate(matches[3], matches[2], matches[1]);
      }
    },
    format(date) {
      return `${padStart(date.getDate().toString(), 2, "0")}/${padStart(
        (date.getMonth() + 1).toString(),
        2,
        "0"
      )}/${date.getFullYear()}`;
    },
  },
  localization = {
    buttonLabel: "Choisir une date",
    placeholder: "DD/MM/YYYY",
    selectedDateMessage: "La date sélectionnée est",
    prevMonthLabel: "Mois précédent",
    nextMonthLabel: "Mois suivant",
    monthSelectLabel: "Mois",
    yearSelectLabel: "Année",
    closeLabel: "Fermer",
    keyboardInstruction:
      "Vous pouvez utiliser les flèches du clavier pour naviguer entre les dates",
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
  },
  ...props
}) => {
  const ref = useRef(null);

  useListener(ref, "duetChange", onChange);
  useListener(ref, "duetFocus", onFocus);
  useListener(ref, "duetBlur", onBlur);

  useEffect(() => {
    ref.current.localization = localization;
    ref.current.dateAdapter = dateAdapter;
  }, [localization, dateAdapter]);

  return (
    <duet-date-picker
      ref={ref}
      identifier={name}
      name={name}
      min={min}
      max={max}
      {...props}
    />
  );
};

export default DatePicker;
