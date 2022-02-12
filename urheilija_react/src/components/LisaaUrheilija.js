import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useReducer, useContext } from "react";
import yhteystiedotContext from "../context/YhteystiedotContext";

export default function LisaaPuhelintieto() {
  let history = useNavigate();
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState(Date);
  const [paino, setPaino] = useState(0);
  const [kuvanlinkki, setKuvanlinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  const [virheet, setVirheet] = useState({});
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks

  const handleSubmit = async (e) => {
    const uusiUrheilija = {
      etunimi: etunimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      kuvanlinkki: kuvanlinkki,
      laji: laji,
      saavutukset: saavutukset,
    };
    console.log(uusiUrheilija);
    YhteystiedotContext.setYhteystiedot(uusiUrheilija);
    history("/");
  };
  return (
    <div className="card bg-light text-dark mb-3">
      <div className="card-header text-primary">
        {" "}
        <strong>Urheilija tiedot</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              id="nimitieto"
              type="text"
              name="etunimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={etunimi}
              onChange={(event) => setEtunimi(event.target.value)}
              error={virheet.etunimi}
            />
            <div className="invalid-feedback">Täytä etunimi</div>
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
              onChange={(event) => setSukunimi(event.target.value)}
              error={virheet.sukunimi}
            />
            <div className="invalid-feedback">Täytä sukunimi</div>
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
              onChange={(event) => setKutsumanimi(event.target.value)}
              error={virheet.kutsumanimi}
            />
            <div className="invalid-feedback">Täytä kutsumanimi</div>
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
              onChange={(event) => setSyntymavuosi(event.target.value)}
              error={virheet.syntymavuosi}
            />
            <div className="invalid-feedback">Täytä syntymavuosi</div>
          </div>

          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              id="paino"
              type="number"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino kilogram ..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
              error={virheet.paino}
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
              onChange={(event) => setKuvanlinkki(event.target.value)}
              error={virheet.kuvanlinkki}
            />
            <div className="invalid-feedback">Täytä kuvanlinkki</div>
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
              onChange={(event) => setLaji(event.target.value)}
              error={virheet.laji}
            />
            <div className="invalid-feedback">Täytä laji</div>
          </div>

          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              id="saavutukset"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä saavutkset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
              error={virheet.saavutukset}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>

          <input
            type="submit"
            value="Lisää urhelija profiili"
            className="btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
}
