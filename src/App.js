import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { About } from './components/About/About';
import { Projects } from './components/Project/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
