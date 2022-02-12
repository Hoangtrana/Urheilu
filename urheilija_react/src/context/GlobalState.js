import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import YhteystiedotContext from "./YhteystiedotContext";
import { GET_YHTEYSTIEDOT } from "./types";
import axios from "axios";
const GlobalState = (props) => {
  //initial state
  let initialState = {
    yhteystiedot: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const getYhteystiedot = async () => {
    try {
      let res = await axios.get("http://localhost:3002/urheilijat");
      let { data } = res;
      dispatch({ type: GET_YHTEYSTIEDOT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getYhteystieto = async (id) => {
    try {
      let sql = "http://localhost:3002/urheilijat/" + id;
      let res = await axios.get(sql);
      console.log("GET_YHTEYSTIETO:");
      dispatch({ type: "GET_YHTEYSTIETO", payload: res.data });
      ///return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const setYhteystiedot = async (uusiUrheilijatieto) => {
    try {
      const res = await axios
        .post(`http://localhost:3002/lisaa`, uusiUrheilijatieto)
        .then((res) => {
          dispatch({ type: "ADD_YHTEYSTIETO", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const setYhteystieto = async (id, paivitettyUrheilijatieto) => {
    try {
      const res = await axios
        .put(`http://localhost:3002/urheilijat/${id}`, paivitettyUrheilijatieto)
        .then((res) => {
          dispatch({ type: "EDIT_YHTEYSTIETO", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const poistaYhteystieto = async (id) => {
    try {
      let sql = "http://localhost:3002/urheilijat/" + id["id"];

      const res = await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_YHTEYSTIETO", payload: id["id"] });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <YhteystiedotContext.Provider
      value={{
        yhteystiedot: state.yhteystiedot,
        getYhteystiedot,
        setYhteystieto,
        setYhteystiedot,
        poistaYhteystieto,
        getYhteystieto,
      }}
    >
      {props.children}
    </YhteystiedotContext.Provider>
  );
};
//};
export default GlobalState;
