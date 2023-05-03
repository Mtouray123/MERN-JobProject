import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import SubmitJob from './components/submitJob';
import ViewJobs from './components/viewJobs';

import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/orders/new' element={<NewOrderPage />} />
        <Route path='/orders' element={<OrderHistoryPage />} />
        <Route path='/jobs/new' element={<SubmitJob />} />
        <Route path='/jobs' element={<ViewJobs />} />
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      
      }
    </main>
  );
}

export default App;
