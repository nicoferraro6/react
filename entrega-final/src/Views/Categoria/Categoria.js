import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoaderSpinner from "../../componentes/LoaderSpinner/LoaderSpinner";
import { encontrarCategoria } from "../../Funciones/encontrarCategorias";
import "./Categoria.css";
import Item from "../../componentes/Item/Item";
import { filtrarProductos } from "../../Funciones/filtrarProductos";

export default function Categoria() {
  const { id } = useParams();
  const [categoria, setCategoria] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCategoria(encontrarCategoria(id));
    filtrarProductos(id).then((res) => setItems(res));
  }, [id]);
  return (
    <div className="ItemListContainer">
      <div className="ContainerItemList">
        <div className="ItemList">
          {items.length ? (
            items.map((producto) => {
              return <Item producto={producto} key={producto.id} />;
            })
          ) : (
            <LoaderSpinner />
          )}
        </div>
      </div>
    </div>
  );
}