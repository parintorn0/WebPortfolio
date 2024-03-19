import './css/App.css';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Header from './Widgets/Header/Header';
import Home from './Widgets/Home/Home';
import Footer from './Widgets/Footer/Footer';
import Contact from './Widgets/Contact/Contact';
import About from './Widgets/About/About';
import Education from './Widgets/Education/Education';
import Project from './Widgets/Project/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
