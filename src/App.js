import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:word' element={<Form/>}/>
          <Route path='/:word/:color/:backColor' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
