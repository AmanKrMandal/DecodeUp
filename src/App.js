import './App.css';
import { Router, Route, Routes } from "react-router-dom"
import Dashboard from './component/Dashboard';
import Order from './component/Order';
import Product from './component/Product';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/order' element={<Order />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
