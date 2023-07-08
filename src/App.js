import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import SharedLayout from './components/SharedLayout';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Homepage />} />
              <Route path='about' element={<AboutMe />} />
              <Route path='portfolio' element={<Portfolio />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
