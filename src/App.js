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
      <NavBar tutorialLink={'tutorials'} aboutLink={'about'} membersLink={'members'}/>
      <div className='h-[72px]'>

      </div>
      <Welcome />
      {/* <Tutorials/> */}
      {/* <Members /> */}
      {/* <Events /> */}
      {/* <Faq /> */}
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;
