export enum ClientType {
  Client = 0,
  Advisor = 1,
}

// On a pas vraiment besoin d'un Map<ClientType, string> ici, vu qu'on s'en sert qu'à un endroit
export const CLIENT_TYPE_LABELS = [
  { label: "Client final", code: ClientType.Client },
  { label: "Prescripteur", code: ClientType.Advisor },
];
