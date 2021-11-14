"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_cookie_1 = require("react-cookie");
var CookieBanner = function (_a) {
    var className = _a.className;
    var _b = react_cookie_1.useCookies(["cookieConsent"]), cookies = _b[0], setCookie = _b[1];
    var _c = react_1.useState(false), isVisible = _c[0], setIsVisible = _c[1];
    react_1.useEffect(function () {
        if (cookies.cookieConsent === undefined) {
            setIsVisible(true);
        }
        if (cookies.cookieConsent === false) {
            disableGoogleAnalytics();
        }
    }, []);
    var setCookieConsent = function (value) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        setCookie("cookieConsent", value, { expires: expirationDate });
    };
    var disableGoogleAnalytics = function () {
        window["ga-disable-" + process.env.GATSBY_OLD_ANALYTICS_ID] = true;
        window["ga-disable-" + process.env.GATSBY_ANALYTICS_ID] = true;
    };
    var handleCookieRefusal = function () {
        setCookieConsent(false);
        setIsVisible(false);
        disableGoogleAnalytics();
    };
    var handleCookieAcceptation = function () {
        setCookieConsent(true);
        setIsVisible(false);
    };
    return (isVisible && (<div className="sm:flex bg-brown-700 text-brown-50 align-center justify-center flex-nowrap fixed left-1/2 transform -translate-x-1/2 bottom-0 sm:bottom-2 w-full max-w-5xl py-2 px-4 z-50">
        <p className="flex items-center flex-grow pb-2 sm:pb-0">
          Nous utilisons les cookies afin d'améliorer votre expérience et
          mesurer la fréquentation de nos services.
        </p>
        <div className="sm:ml-4 flex justify-center flex-shrink-0 self-center">
          <button onClick={handleCookieRefusal} type="button" className="flex items-center flex-shrink-0 uppercase font-bold text-xs rounded-full px-2 py-2 focus:outline-none focus:ring-1 focus:ring-white">
            Non merci
          </button>
          <button onClick={handleCookieAcceptation} type="button" className="ml-2 flex items-center flex-shrink-0 border border-brown-50 uppercase font-bold text-xs rounded-full px-4 py-2 hover:bg-brown-50 hover:text-brown-700 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
            Accepter
          </button>
        </div>
      </div>));
};
exports.default = CookieBanner;
//# sourceMappingURL=cookie-banner.jsx.map