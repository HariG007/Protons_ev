import logo from './logo.svg';
import Register from './Pages/Ev_Register';
import Signin from './Pages/Ev_Signin';
import '../src/Styles/overall_css.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import { MdHeight } from 'react-icons/md';

function App() {
  return (
    <>
     <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Signin />} />
        <Route index path="/signin" element={<Signin />} />
        <Route index path="/register" element={<Register />} />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
