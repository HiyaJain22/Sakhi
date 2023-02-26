// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/sign up/signup';
import Blog from './components/blog/blog';
<<<<<<< Updated upstream
import ContactUs from './components/contact-us/contact-us';

=======
import Chat from './components/chat/chat';



// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();
>>>>>>> Stashed changes
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
<<<<<<< Updated upstream
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
=======
          <Route path="/blog" element={<Blog />} />
          <Route path="/chat" element={<Chat />} />
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </>
  );
}

export default App;
