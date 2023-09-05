import Header from './components/header';
import Subheader from './components/subheader';
import Nav from './components/nav';
import Post from './components/post';
import Auth from './components/Auth';
import './app.css'

function App() {
  return (
  <>
    <Header/>
    <Auth/>
    <Subheader/>
    <Nav/>
    <Post/>
   </>
  );
}

export default App;
