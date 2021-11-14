import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type DataProps = {
  className?: string;
};

const CookieBanner: React.FC<DataProps> = ({ className }) => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (cookies.cookieConsent === undefined) {
      setIsVisible(true);
    }

    if (cookies.cookieConsent === false) {
      disableGoogleAnalytics();
    }
  }, []);

  const setCookieConsent = (value: boolean) => {
    let expirationDate: Date = new Date();
    expirationDate.setDate(expirationDate.getDate() + 365);

    setCookie("cookieConsent", value, { expires: expirationDate });
  };

  const disableGoogleAnalytics = () => {
    window[`ga-disable-${process.env.GATSBY_OLD_ANALYTICS_ID}`] = true;
    window[`ga-disable-${process.env.GATSBY_ANALYTICS_ID}`] = true;
  };

  const handleCookieRefusal = () => {
    setCookieConsent(false);
    setIsVisible(false);

    disableGoogleAnalytics();
  };

  const handleCookieAcceptation = () => {
    setCookieConsent(true);
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="sm:flex bg-brown-700 text-brown-50 align-center justify-center flex-nowrap fixed left-1/2 transform -translate-x-1/2 bottom-0 sm:bottom-2 w-full max-w-5xl py-2 px-4 z-50">
        <p className="flex items-center flex-grow pb-2 sm:pb-0">
          Nous utilisons les cookies afin d'améliorer votre expérience et
          mesurer la fréquentation de nos services.
        </p>
        <div className="sm:ml-4 flex justify-center flex-shrink-0 self-center">
          <button
            onClick={handleCookieRefusal}
            type="button"
            className="flex items-center flex-shrink-0 uppercase font-bold text-xs rounded-full px-2 py-2 focus:outline-none focus:ring-1 focus:ring-white"
          >
            Non merci
          </button>
          <button
            onClick={handleCookieAcceptation}
            type="button"
            className="ml-2 flex items-center flex-shrink-0 border border-brown-50 uppercase font-bold text-xs rounded-full px-4 py-2 hover:bg-brown-50 hover:text-brown-700 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            Accepter
          </button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
