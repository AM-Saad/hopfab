import React, { useEffect } from "react";
import { Link } from "gatsby";
import { useStateMachine } from "little-state-machine";

import { updateMeta, resetExceptContact } from "./stateMachineActions";

type DataProps = {};

const QuotationStepFinal: React.FC<DataProps> = () => {
  const { actions, state } = useStateMachine({
    updateMeta,
    resetExceptContact,
  });

  useEffect(() => {
    // On ne passe pas là qu'une fois. Si l'utilisateur recharge la page on revient au début
    if (!state.meta.isFinished) {
      actions.updateMeta({ isFinished: true });
    } else {
      actions.resetExceptContact(null);
    }
  }, []);

  return (
    <div className="flex-auto h-full flex flex-col">
      <div className="max-w-3xl mx-auto space-y-12 mt-12">
        <h4 className="text-5xl font-medium text-brown-50 mb-2">
          Merci pour votre demande de projet sur-mesure !
        </h4>
        <p className="text-brown-50 mb-4">
          Notre équipe prend connaissance de votre projet et l'un de nos experts
          vous recontacte sous 2 jours ouvrés afin de finaliser votre cahier des
          charges.
          <br />
          <br />
          À très vite,
          <br />
          L'équipe Hopfab
        </p>
        <div className="space-x-4 mt-12">
          <button
            onClick={actions.resetExceptContact}
            className="inline-flex text-xs text-brown-50 font-bold uppercase border border-brown-50 rounded-full px-6 py-5 hover:bg-brown-50 hover:text-brown-700 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            Déposer un nouveau projet
          </button>
          <Link
            to="/realisations"
            className="inline-flex text-xs text-brown-50 font-bold uppercase border border-brown-50 rounded-full px-6 py-5 hover:bg-brown-50 hover:text-brown-700 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            Voir nos réalisations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuotationStepFinal;
