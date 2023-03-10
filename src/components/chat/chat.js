import React, { useRef, useState } from 'react';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/analytics';
// import React, { useRef, useState } from 'react';
// import './chat.module.css';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import NavScrollExample from '../navbar/Navbar';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import AnimatedPage from '../Animate/Animate';

firebase.initializeApp({
  // your config
  apiKey: "AIzaSyBmNC6_Xxch5kq5bChSnFkirT_cpSLfDLY",
  authDomain: "auth-asteroid.firebaseapp.com",
  projectId: "auth-asteroid",
  storageBucket: "auth-asteroid.appspot.com",
  messagingSenderId: "1031146454666",
  appId: "1:1031146454666:web:6fb1ed0bfd867d0637f773"
})

// const auth = firebase.auth();
// const firestore = firebase.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function Chat() {

  const [user] = useAuthState(auth);

  return (
    <>
    
    <NavScrollExample />
    <AnimatedPage>
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
    </AnimatedPage>
    </>
    
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}

function ChatMessage(props) {
  const { text, uid} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}  alt="Hiya ne kaand kia"/> */}
      <p style={{color: 'black'}}>{text}</p>
    </div>
  </>)
}




export default Chat;