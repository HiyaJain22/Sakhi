import './App.css';
// import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/sign up/signup';
import Blog from './components/blog/blog';
import Chat from './components/chat/chat';
import ContactUs from './components/contact-us/contact-us';
// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
