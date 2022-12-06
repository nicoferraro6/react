// import {data} from './data';
// import{useState, useEffect} from 'react';
// import ItemList from './ItemList';
// import { useParams } from 'react-router-dom';
// import './ItemsListContainer.css';


// const ItemsListContainer = () => {
//   const [items, setItems] = useState([]);
//   const {categoryName} = useParams();
//   console.log(categoryName);

//   const getProducts = new Promise ((res, rej) => {
//     setTimeout(() => {
//       if(categoryName){
//         const filteredData = data.filter((item) => {
//           return item.category === categoryName;
//         })
//         res(filteredData);
//       } else{
//         res(data);
//       }
      
//     }, 1000)
//   })
//   useEffect(() =>{
//     getProducts.then((res) => setItems(res));
//   }, [categoryName]);
//   return (
//     <div>
//       <ItemList products={items}/>
//     </div>
//   );
// };

// export default ItemsListContainer

import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import IconSearch from "../Header/IconSearch/IconSearch";

import { cargarProductos } from "../../Funciones/cargarProductos";



import s from "./ItemsListContainer.css";


export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos().then((data) => {
      setProductos(data);
    });
  }, []);

  return (
    <div className={s.ItemListContainer}>
      <div className={s.SearchContainer}>
    
      </div>

      <div className={s.ContainerItemList}>
        <ItemList items={productos} />
      </div>
    </div>
  );
}