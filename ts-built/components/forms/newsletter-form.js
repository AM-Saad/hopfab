"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const NewsletterForm = ({ className, theme }) => {
    return (<div id="mc_embed_signup">
      <form action="https://hopfab.us10.list-manage.com/subscribe/post?u=399996a025c465f7f9ffb5450&amp;id=a9ccc391e5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="flex justify-between border-b border-gris-700 mb-6 lg:mb-0" target="_blank" noValidate>
        <label htmlFor="mce-EMAIL" className="sr-only">
          Adresse e-mail
        </label>
        <input type="email" name="EMAIL" id="mce-EMAIL" autoComplete="email" defaultValue="" required className={`bg-transparent w-56 sm:flex sm:max-w-md items-center border-0  flex-1 ${theme === "brown"
            ? "border-white placeholder-gray-200 focus:ring-white focus:border-white"
            : "text-gris-800 border-0 placeholder-gris-700 focus:ring-brown-700 focus:border-brown-700"} rounded-none focus:rounded-md focus:outline-none`} placeholder="votre@email.com"/>
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input type="text" name="b_399996a025c465f7f9ffb5450_a9ccc391e5" tabIndex={-1} defaultValue=""/>
        </div>
        <div className="flex items-center rounded-md sm:flex-shrink-0">
          <button id="mc-embedded-subscribe" type="submit" className="w-full border border-transparent py-2 px-4 flex items-center justify-center text-base font-medium rounded-md transform translate-x-0 transition hover:translate-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700">
                      <span>S&#39;INSCRIRE</span>
          </button>
        </div>
      </form>
    </div>);
};
exports.default = NewsletterForm;
