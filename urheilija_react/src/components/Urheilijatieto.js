import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import yhteystiedotContext from "../context/YhteystiedotContext";
import { useNavigate } from "react-router-dom";

const Urheilijatieto = (props) => {
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  let history = useNavigate();
  const [naytaUrheilijatieto, setNaytaUrheilijatieto] = useState(false);

  const onDeleteClick = (id) => {
    YhteystiedotContext.poistaYhteystieto(id);
    window.location.reload();
    history("/");
  };

  const onShowClick = (e) => {
    let lippu = !naytaUrheilijatieto;
    setNaytaUrheilijatieto(lippu);
  };
  const {
    id,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuvanlinkki,
    laji,
    saavutukset,
  } = props.yhteystieto;
  return (
    <div className="card bg-light text-dark mb-3">
      <h4>
        {etunimi} {sukunimi}
      </h4>

      <div className="mid-center ml-auto btn-sm">
        <div>
          <button className="btn btn-info" onClick={onShowClick.bind(this)}>
            Näytä
          </button>
          <Link to={`urheilijatieto/muokkaa/${id}`}>
            <button className="btn btn-secondary">Muokkaa</button>
          </Link>
          <button
            className="btn btn-danger"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>
        </div>
      </div>
      {naytaUrheilijatieto ? (
        <ul className="list-group">
          <li className="list-group-item">Kutsumanimi: {kutsumanimi}</li>
          <li className="list-group-item">Syntymavuosi: {syntymavuosi}</li>
          <li className="list-group-item">Paino: {paino}</li>
          <li className="list-group-item">Kuvanlinkki: {kuvanlinkki}</li>
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Urheilijatieto;
