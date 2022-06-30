import './App.css';
import {Header, Home,CheckOut} from './Components/index';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes> 
          <Route path="/checkout" element={
                <>
                <CheckOut />
                </>
          } />
          <Route path="/" element={
                <>
                <Home />
                </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
