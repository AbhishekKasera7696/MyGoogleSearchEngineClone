import Home  from './pages/Home';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import SearchPage from './pages/SearchPage'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Routes>
            <Route  path="/about"></Route>
            <Route  path="/search"  element ={<SearchPage/>}/>
            <Route  path="/"  element ={<Home/>}/>
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;





