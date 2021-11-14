import React from "react";

type DataProps = {};

const BrowseHappy: React.FC<DataProps> = () => {
  return (
    <>
      <div className="browsehappy">
        <p>
          Vous utilisez un navigateur <strong>obsolète</strong>. Veuillez{" "}
          <a href="https://browsehappy.com/">mettre à jour votre navigateur</a>{" "}
          pour pouvoir utiliser le site Hopfab.
        </p>
      </div>
    </>
  );
};

export default BrowseHappy;
