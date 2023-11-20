import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Tutorials from './pages/tutorials';
import Members from './pages/members';
import Events from './pages/events';
import ContactForm from './pages/contact-form';

function App() {
  return (
    <div className="App">
      {/* Router for multi page website */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/members' element={<Members />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact-form' element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
