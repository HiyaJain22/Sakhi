import './App.css';
// import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/sign up/signup';
import Blog from './components/blog/blog';
import ContactUs from './components/contact-us/contact-us';
import Chat from './components/chat/chat';



function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/chat" element={<Chat />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
