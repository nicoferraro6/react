import React, { useState, useEffect } from "react";
import s from "./Formulario.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import crearTicket from "../../Funciones/crearTicket";

export default function Formulario() {
  const [form, setForm] = useState({
    buyer: { nombre: "", telefono: "", apellido: "", mail: "" },
    items: [],
    date: "",
    total: 0,
  });

  const { carrito, totalContext } = useContext(UserContext);

  useEffect(() => {
    setForm({ ...form, total: totalContext, items: carrito });
  }, [carrito, totalContext]);

  function rellenarEstado(e) {
    setForm({
      ...form,
      buyer: { ...form.buyer, [e.target.name]: e.target.value },
    });
  }

  function enviarTicket(e) {
    e.preventDefault();
    const date = new Date();

    crearTicket({ ...form, date });
  }

  return (
    <form
      onSubmit={(e) => {
        enviarTicket(e);
      }}
    >
      <h3>Datos Compra</h3>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={(e) => {
          rellenarEstado(e);
        }}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        onChange={(e) => {
          rellenarEstado(e);
        }}
      />
      <input
        type="mail"
        name="mail"
        placeholder="Mail"
        onChange={(e) => {
          rellenarEstado(e);
        }}
      />
      <input
        type="text"
        name="telefono"
        placeholder="Telefono"
        onChange={(e) => {
          rellenarEstado(e);
        }}
      />
      <button className={s.BotonFormulario}>TERMINAR COMPRA</button>
    </form>
  );
}