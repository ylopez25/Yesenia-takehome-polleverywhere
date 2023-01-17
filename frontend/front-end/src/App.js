// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/NewForm.js";
import Show from "./Pages/Show";
import Edit from './Pages/Edit';
import Win from './Pages/Win';
import './App.css'
// COMPONENTS
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raffles" element={<Index />} />
            <Route path="/raffles/register" element={<New />} />
            <Route exact path="/raffles/:id" element={<Show />} />
            <Route path="/raffles/:id/winner" element={<Win/>}/>
            <Route path="/raffles/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;