import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nutrition from './Pages/Nutrition';
import Health from './Pages/Health';
import Workout from './Pages/workout';


const App = () => {
  return ( 
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/health' element={<Health/>} />
        <Route path='/workout' element={<Workout/>} />
        <Route path='/nutrition' element={<Nutrition/>} />

      </Routes>
    </BrowserRouter>
    
    </>
   );
}
export default App;