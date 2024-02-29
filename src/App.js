import NavBar from './components/NavBar';
import About from './components/About';
import Tutorials from './components/Tutorials';
import Members from './components/members';
import Events from './components/Events';
import Faq from './components/faq';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar tutorialLink={'tutorials'} aboutLink={'about'} membersLink={'members'}/>
      </header>
      <About />
      <Tutorials/>
      <Members />
      <Events />
      <Faq />
      <ContactForm />
    </div>
  );
}

export default App;
