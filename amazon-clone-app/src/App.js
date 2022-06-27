import './App.css';
import {Header, Home} from './Components/index';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route path="/" element={
            <>
            <Header />
            <Home />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
