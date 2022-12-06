// import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import NavBar from './componentes/NavBar';
// import ItemsListContainer from './componentes/ItemsListContainer';
// import Cart from './componentes/Cart';
// import ItemDetailContainer from './componentes/ItemDetailContainer';


// function App() {
//   return (
//     <BrowserRouter>
//     <NavBar/>
//     <Routes>
//       <Route path='/category/:categoryName' element={<ItemsListContainer/>}/>
//       <Route path='/cart'element={<Cart/>}/>
//       <Route path='/detail/' element={<ItemDetailContainer/>}/>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// Importo el contexto:
import GlobalUserContext from "./Context/UserContext";
// Importo las rutas
import Rutas from "./Routes/Rutas";

export default function App() {
  return (
    <>
      {/* Llamo al componente del contexto: */}
      <GlobalUserContext>
        {/*  LLamo a las rutas (que contiene toda mi app) */}
        <Rutas />
      </GlobalUserContext>
    </>
  );
}
