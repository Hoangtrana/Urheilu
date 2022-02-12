import React, { useContext, useEffect } from "react";
import Urheilijatieto from "./Urheilijatieto";
import yhteystiedotContext from "../context/YhteystiedotContext";
const Urheilijatiedot = () => {
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  console.log(YhteystiedotContext);
  useEffect(() => {
    YhteystiedotContext.getYhteystiedot();
    console.log(YhteystiedotContext);
  }, []);
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-info">
          {" "}
          <strong>Urheilijatiedot</strong>
        </span>
      </h1>
      <React.Fragment>
        {YhteystiedotContext.yhteystiedot.length
          ? YhteystiedotContext.yhteystiedot.map((yhteystieto) => (
              <Urheilijatieto key={yhteystieto.id} yhteystieto={yhteystieto} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default Urheilijatiedot;
