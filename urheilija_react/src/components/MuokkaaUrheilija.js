import React, { Component, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import yhteystiedotContext from "../context/YhteystiedotContext";

const MuokkaaUrheilija = () => {
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState(Date);
  const [paino, setPaino] = useState(0);
  const [kuvanlinkki, setKuvanlinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  const { id } = useParams();
  let history = useNavigate();

  useEffect(() => {
    console.log("yhteystiedot");
    axios.get(`http://localhost:3002/urheilijat/${id}`).then((res) => {
      const yhteystiedot = res.data;
      setEtunimi(yhteystiedot.etunimi);
      setSukunimi(yhteystiedot.sukunimi);
      setKutsumanimi(yhteystiedot.kutsumanimi);
      setSyntymavuosi(yhteystiedot.syntymavuosi);
      setPaino(yhteystiedot.paino);
      setKuvanlinkki(yhteystiedot.kuvanlinkki);
      setLaji(yhteystiedot.laji);
      setSaavutukset(yhteystiedot.saavutukset);
    });
  }, [id]);
  const handleSubmit = async (e) => {
    const paivitettyUrheilijaProfiili = {
      etunimi: etunimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      kuvanlinkki: kuvanlinkki,
      laji: laji,
      saavutukset: saavutukset,
    };

    YhteystiedotContext.setYhteystieto(id, paivitettyUrheilijaProfiili);
    history("/");
  };
  const onChangeEtunimi = (e) => {
    setEtunimi(e.target.value);
  };
  const onChangeSukunimi = (e) => {
    setSukunimi(e.target.value);
  };
  const onChangeKutsumanimi = (e) => {
    setKutsumanimi(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  };
  const onChangeKuvanlikki = (e) => {
    setKuvanlinkki(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };

  return (
    <div className="card mb-3">
      <div className="card-header text-warning">
        <strong>Muokkaa urheilija tieto</strong>
      </div>

      <div className="card-body ">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group ">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              id="nimitieto"
              type="text"
              name="etunimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={etunimi}
              onChange={onChangeEtunimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              id="sukunimi"
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={onChangeSukunimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="kutsumanimi">Kutsumanimi</label>
            <input
              id="kutsumanimi"
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={onChangeKutsumanimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymavuosi</label>
            <input
              id="syntymavuosi"
              type="date"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymäpäivä..."
              value={syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />
          </div>

          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              id="paino"
              type="number"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
            <div className="invalid-feedback">Täytä paino</div>
          </div>

          <div className="form-group">
            <label htmlFor="kuvanlinkki">Kuvanlinkki</label>
            <input
              id="kuvanlinkki"
              type="text"
              name="kuvanlinkki"
              className="form-control form-control-lg"
              placeholder="Syötä kuvanlinkki..."
              value={kuvanlinkki}
              onChange={onChangeKuvanlikki}
            />
          </div>

          <div className="form-group">
            <label htmlFor="laji">laji</label>
            <input
              id="laji"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={onChangeLaji}
            />
          </div>

          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              id="saavutukset"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>

          <input
            type="submit"
            value="Muokkaa urheilija tieto"
            className="btn btn-warning"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaUrheilija;
