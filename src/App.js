import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './routes/Appointment/Appointment';
import Login from './routes/Login/Login';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import Services from './routes/Services/Services';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/serviceDetail/:serviceId' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        {/* <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route> */}
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
