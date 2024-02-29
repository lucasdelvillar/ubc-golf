import NavBar from './components/navbar';
import About from './components/about';
import Tutorials from './components/tutorials';
import Members from './components/members';
import Events from './components/events';
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
