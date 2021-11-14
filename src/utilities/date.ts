import { format as formatFns } from "date-fns";
import { fr } from "date-fns/locale";

const format = (date: Date, format: string) => {
  return formatFns(date, format, { locale: fr });
};

export { format };
