import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Reviews from './Components/Header/Reviews/Reviews';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/reviews' element={<Reviews></Reviews>}></Route>
         <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
         <Route path='/blog' element={<Blog></Blog>}></Route>
         <Route path='about' element={<About></About>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
    </div>
  );
}

export default App;
