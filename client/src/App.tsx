import MainPage from './components/MainPage';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/main' element={ <MainPage /> } />
      </Routes>
    </div>
  );
}

export default App;
