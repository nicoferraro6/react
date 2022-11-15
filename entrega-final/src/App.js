import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './componentes/NavBar';
import ItemsListContainer from './componentes/ItemsListContainer';
import Cart from './componentes/Cart';
import ItemDetailContainer from './componentes/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<NavBar/>}/>
      <Route path='/' element={<ItemsListContainer/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/detail/' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
