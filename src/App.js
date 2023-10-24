
import './App.css';
import Navigation from './routes/navigation';
import { Routes, Route } from 'react-router';


function App() {
  return (
    <Routes>
      <Route path="/" Component={Navigation} />
      
    </Routes>
  );
}

export default App;
