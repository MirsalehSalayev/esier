
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Products';
import Main from './components/MainLayouts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Main/>}>
          {/* <Route index element={<Navbar />} /> */}
          <Route index element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
