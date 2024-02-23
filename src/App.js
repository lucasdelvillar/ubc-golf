import NavBar from './components/navbar';
import About from './components/about';
import Tutorials from './components/tutorials';
import Members from './components/members';
import Events from './components/events';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar tutorialLink={'tutorials'}/>
      </header>
      <About />
      <Tutorials/>
      <Members />
      <Events />
    </div>
  );
}

export default App;
