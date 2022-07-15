
import './App.css';
import HeaderForm from './components/HeaderForm';
import Show from './views/Planent';
import People from './views/People';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>Show Walker API</h1>
      <HeaderForm/>

      <Routes>
        <Route path="/planets/:id" element={<Show/>}/>
        <Route path="/people/:id" element={<People/>}/>
      </Routes>
    </div>
  );
}

export default App;
