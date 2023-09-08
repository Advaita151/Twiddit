import Header from './components/header';
import Subheader from './components/subheader';
import Nav from './components/nav';
import Post from './components/post';
import Auth from './components/Auth';
import AuthContext from './components/AuthContext';
import { useState } from 'react';
import './app.css'

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
  <AuthContext.Provider value={{show:showAuth, setShow: setShowAuth}}>
    
    <Header/>
    <Auth/>
    <Subheader/>
    <Nav/>
    <Post/>
   </AuthContext.Provider>
  );
}

export default App;
