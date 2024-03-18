import NavBar from './components/navbar';
import Welcome from './components/Welcome';
import Tutorials from './components/tutorials';
import Members from './components/members';
import Events from './components/events';
import Faq from './components/faq';
import ContactForm from './components/ContactForm';
import friends from './assets/friends-golf-landscape.jpeg'

function App() {
  return (
    <div className="App">
      <NavBar tutorialsLink={'tutorials'} aboutLink={'about'} membersLink={'members'} eventsLink={'events'}/>
      <div className='h-[72px]'>

      </div>
      <Welcome />
      <Events />
      <Members />
      {/* <Tutorials/> */}
      {/* <Faq /> */}
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;
