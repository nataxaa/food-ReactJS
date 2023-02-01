import { Footer } from './components/footer';
import { Header } from './components/header';
import { Feedback } from './pages/feedback';
import { Home } from './pages/home';
import { Menu } from './pages/menu';
import { Ofertas } from './pages/ofertas';
import { SecondPage } from './pages/secondPage';
import { Team } from './pages/team';
import './style/global.ts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <SecondPage/>
      <Menu/>
      <Ofertas/>
      <Team/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
