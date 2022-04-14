import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './routes/Appointment/Appointment';
import Contact from './routes/Contact/Contact';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import Services from './routes/Services/Services';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
