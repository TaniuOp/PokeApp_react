import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// import './App.css';
import './styles/styles.scss';


// Importamos BrowserRouter para hacer redirecciones 
import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
