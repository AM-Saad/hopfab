import React, { useEffect, useMemo } from "react";
import { navigate } from "gatsby";
import { padStart } from "lodash";
import { useStateMachine } from "little-state-machine";
import { get } from "@hopfab/http";

import { updateData } from "./stateMachineActions";
import XIcon from "../icons/x-icon";
import QuotationStepKnowHow from "./quotation-step-project-know-how";

import QuotationStepMaterials from "./quotation-step-materials";
import QuotationStepProjectTypology from "./quotation-step-project-typology";
import QuotationStepServiceType from "./quotation-step-service-type";
import QuotationStepService from "./quotation-step-service";
import QuotationStepBadgeType from "./quotation-step-badge-type";
import QuotationStepSpendingLimit from "./quotation-step-spendinglimit";
import QuotationStepShippingDate from "./quotation-step-shipping-date";
import QuotationStepShippingLocation from "./quotation-step-shipping-location";
import QuotationStepAttachment from "./quotation-step-attachment";
import QuotationStepDescription from "./quotation-step-description";
import QuotationStepContact from "./quotation-step-contact";
import QuotationStepFinal from "./quotation-step-final";

type DataProps = {};

const QuotationSteps: React.FC<DataProps> = ({}) => {
  const { actions, state } = useStateMachine({ updateData });

  useEffect(() => {
    // Référentiel dynamique : on le fait ici parce qu'on est coté client et on a accès aux actions du state machine
    const fetchData = async () => {
      try {
        const referentiels = await get<any>(`/referentiels.json`);
        const serviceTypesData = [
       
          {
              name: "estimatif-de-chiffrage",
            description: "Je finalise la conception de mon projet, je souhaite obtenir une fourchette de prix",
          },
          {
              name: "chiffrage-standard",
            description: "Mon cahier des charges est complet, je souhaite obtenir des devis comparatifs",
            },
             {
            name: "mise-en-relation",
            description:
              "Mon projet est en cours de réflexion, je souhaite échanger avec un atelier",
          },
        ];

        actions.updateData({
          projectTypologies:
            referentiels?.allTypologies?.nodes?.map(t => ({
              code: t.id__normalized,
              label: t.humanName,
            })) ?? [],
            services:
            referentiels?.allServices?.nodes?.map(s => ({
              code: s.id__normalized,
              label: s.humanName,
            })) ?? [],
            badges:
            referentiels?.allBadges?.nodes?.map(s => ({
              code: s.id__normalized,
              label: s.humanName,
            })) ?? [],
            materials:
            referentiels?.allMaterials?.nodes?.map(s => ({
              code: s.id__normalized,
              label: s.humanName,
            })) ?? [],
          serviceTypes:
            referentiels?.allServiceTypes?.nodes?.map(st => ({
              code: st.id__normalized,
              description: serviceTypesData?.find(std => std.name === st.name)
                ?.description,
            })) ?? [],
          priceRanges:
            referentiels?.allPriceRanges?.nodes?.map(pr => ({
              code: pr.id__normalized,
              label: pr.humanName,
            })) ?? [],
            professions:
            referentiels?.allProfessions?.nodes?.map(pr => ({
              code: pr.id__normalized,
              label: pr.humanName,
            })) ?? [],

        });
      } catch (error) {
        // TODO: handle error
      }
    };

      fetchData();

  }, []);

  const progress = useMemo(() => {
    const progress = (state.meta.currentStep / state.meta.totalSteps) * 100;
    if (progress > 100) return 100;
    else return progress;
  }, [state.meta.currentStep, state.meta.totalSteps]);


  return (
    <>
      <div className="flex items-center justify-between">
        <div
          className={`font-bold text-xsm text-brown-50 ${
            state.meta.currentStep <= state.meta.totalSteps ? "" : "invisible"
          }`}
        >
          <div className="uppercase">Lancer votre projet</div>
          <div className="uppercase">
            Étape {padStart(state.meta.currentStep.toString(), 2, "0")}/
            {padStart(state.meta.totalSteps.toString(), 2, "0")}
          </div>
        </div>
        <a
          href="#"
          onClick={() => navigate(-1)}
          className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
        >
          <XIcon className="w-6 h-6 text-brown-50" />
        </a>
      </div>
          <main className="flex-auto h-full flex flex-col">
           {state.meta.currentStep === 1 && <QuotationStepKnowHow />}
           {state.meta.currentStep === 2 && <QuotationStepShippingLocation />}
            {state.meta.currentStep === 3 && <QuotationStepShippingDate />}
            {state.meta.currentStep === 4 && <QuotationStepProjectTypology />}
            {state.meta.currentStep === 5 && < QuotationStepSpendingLimit />}
            {state.meta.currentStep === 6 && <QuotationStepBadgeType />}
        {state.meta.currentStep === 7 && <QuotationStepServiceType />}
         {state.meta.currentStep === 8 && < QuotationStepService />}
        {state.meta.currentStep === 9 && <QuotationStepMaterials />}
        {state.meta.currentStep === 10 && < QuotationStepDescription/>}
        {state.meta.currentStep === 11 && < QuotationStepAttachment />}
        {state.meta.currentStep === 12 && <QuotationStepContact />}
        {state.meta.currentStep === 13 && <QuotationStepFinal />}
      </main>
      <div className="h-px w-full bg-gris-700 mt-3">
        <div
          style={{ width: `${progress}%` }}
          className="h-px bg-brown-50"
        ></div>
      </div>
    </>
  );
};

export default QuotationSteps;
