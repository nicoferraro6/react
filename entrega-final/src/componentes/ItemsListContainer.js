import {data} from './data';
import './ItemsListContainer.css'
import{useState, useEffect} from 'react';
import ItemList from './ItemList';

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const getProducts = new Promise ((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000)
  })
  useEffect(() =>{
    getProducts.then((res) => setItems(res));
  }, [])
  return (
    <div>
      <ItemList products={items}/>
    </div>
  );
};

export default ItemsListContainer