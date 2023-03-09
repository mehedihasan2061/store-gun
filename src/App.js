
import { useState } from 'react';
import './App.css';
import AllGuns from './component/AllGuns/AllGuns';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const countIncrease = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <Navbar count={count}></Navbar>
      <Header></Header>
      <AllGuns countIncrease={countIncrease}></AllGuns>
      <Footer></Footer>
    </div>
  );
}

export default App;
