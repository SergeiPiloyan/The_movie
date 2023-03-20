import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';

const App = () => {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/movie' element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

