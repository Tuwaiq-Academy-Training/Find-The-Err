import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Cards from "./component/Cards";
import About from "./component/About";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  document.title = `Error Free`
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/Cards" element={<Cards/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
