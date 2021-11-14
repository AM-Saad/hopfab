import React, { useState } from "react";
import { post } from "@hopfab/http";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

import ExclamationCircleIcon from "../icons/exclamation-circle-icon";
import CheckCircleIcon from "../icons/check-circle-icon";
import { analytics } from "../../utilities/g-tag";

type DataProps = {
  className?: string;
};

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
};

const ContactForm: React.FC<DataProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [backendError, setBackendError] = useState(null);
  const onSubmit = async data => {
    setBackendError(null);
    setIsLoading(true);
    try {
      await post(
        `${process.env.GATSBY_CONTACT_SENDER_URL}`,
        JSON.stringify(data)
      );
      setIsSuccess(true);
      analytics("event", "filled_form", {
        event_category: "engagement",
        event_label: "Formulaire de contact rempli",
      });
    } catch (error) {
      setBackendError("Une erreur est survenue. Veuillez réessayer.");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-bold text-gray-700 uppercase"
        >
          Nom
        </label>
        <div className="mt-1 relative">
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "Votre nom est requis",
              maxLength: {
                value: 50,
                message:
                  "Votre nom ne doit pas comporter plus de 50 caractères",
              },
            })}
            defaultValue=""
            className={`bg-transparent block w-full pr-10 ${
              !errors.lastName
                ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
                : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
            } disabled:opacity-50`}
            placeholder="Dupont"
            disabled={isSuccess}
            aria-invalid={!!errors.lastName}
            aria-describedby="lastName-error"
          />
          {errors.lastName && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {errors.lastName && (
          <p className="mt-2 text-sm text-red-600" id="lastName-error">
            {errors.lastName.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-bold text-gray-700 uppercase"
        >
          Prénom
        </label>
        <div className="mt-1 relative">
          <input
            type="text"
            id="firstName"
            {...register("firstName", {
              required: "Votre prénom est requis",
              maxLength: {
                value: 50,
                message:
                  "Votre prénom ne doit pas comporter plus de 50 caractères",
              },
            })}
            defaultValue=""
            className={`bg-transparent block w-full pr-10 ${
              !errors.firstName
                ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
                : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
            } disabled:opacity-50`}
            placeholder="Jean"
            disabled={isSuccess}
            aria-invalid={!!errors.firstName}
            aria-describedby="firstName-error"
          />
          {errors.firstName && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {errors.firstName && (
          <p className="mt-2 text-sm text-red-600" id="firstName-error">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-700 uppercase"
        >
          Adresse e-mail
        </label>
        <div className="mt-1 relative">
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Votre adresse e-mail est requise",
              maxLength: {
                value: 50,
                message:
                  "Votre adresse e-mail ne doit pas comporter plus de 50 caractères",
              },
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: `Votre adresse e-mail n'est pas valide`,
              },
            })}
            inputMode="email"
            defaultValue=""
            className={`bg-transparent block w-full pr-10 ${
              !errors.email
                ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
                : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
            } disabled:opacity-50`}
            placeholder="votre@email.com"
            disabled={isSuccess}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-bold text-gray-700 uppercase"
        >
          Numéro de téléphone{" "}
          <span className="lowercase font-medium">(optionnel)</span>
        </label>
        <div className="mt-1 relative">
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber", {
              maxLength: {
                value: 50,
                message:
                  "Votre numéro de téléphone ne doit pas comporter plus de 50 caractères",
              },
            })}
            inputMode="tel"
            autoComplete="tel"
            defaultValue=""
            className={`bg-transparent block w-full pr-10 ${
              !errors.phoneNumber
                ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
                : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
            } disabled:opacity-50`}
            disabled={isSuccess}
            aria-invalid={!!errors.phoneNumber}
            aria-describedby="phoneNumber-error"
          />
          {errors.phoneNumber && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {errors.phoneNumber && (
          <p className="mt-2 text-sm text-red-600" id="phoneNumber-error">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-bold text-gray-700 uppercase"
        >
          Message
        </label>
        <div className="mt-1">
          <TextareaAutosize
            id="description"
            {...register("description", {
              required: "Votre message est requis",
              maxLength: {
                value: 5000,
                message:
                  "Votre message ne doit pas comporter plus de 5000 caractères",
              },
            })}
            defaultValue=""
            minRows={5}
            maxRows={15}
            className={`bg-transparent block w-full ${
              !errors.description
                ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
                : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
            } disabled:opacity-50`}
            placeholder="Comment Hopfab peut vous aider ?"
            disabled={isSuccess}
            aria-invalid={!!errors.description}
            aria-describedby="description-error"
          />
        </div>
        {errors.description && (
          <p className="mt-2 text-sm text-red-600" id="description-error">
            {errors.description.message}
          </p>
        )}
      </div>
      {!isSuccess && (
        <button
          type="submit"
          disabled={isLoading}
          className="mr-auto uppercase text-xsm px-12 py-5 font-bold text-brown-50 bg-brown-700 rounded-full disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50"
        >
          {isLoading ? "Envoi en cours ..." : "Envoyer"}
        </button>
      )}
      {backendError && (
        <p className="mt-2 text-sm text-red-600">{backendError}</p>
      )}
      {isSuccess && (
        <div className="bg-brown-700 text-brown-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-5 w-5 text-brown-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm">
                Message envoyé avec succès !
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    setIsSuccess(false);
                  }}
                  className="font-medium underline ml-2"
                >
                  Envoyer un autre message
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
