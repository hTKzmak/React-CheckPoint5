import './App.css';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import { addProductAction } from "./store/cartReducer"

function App() {
  return (
    <div>
      <AddProduct addProductAction={addProductAction}/>
      <Cart />
    </div>
  );
}

export default App;
