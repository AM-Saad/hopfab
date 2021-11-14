const analytics = (type: string, action: string, params: any) => {
  if (typeof window === "undefined" || !window["gtag"]) return;

  window["gtag"](type, action, params);
};

export { analytics };
